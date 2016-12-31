import {inject} from 'aurelia-framework';
import {LoginStatus, NewUserStat} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';
import AsyncHttpClient from './async-http-client';

@inject(EventAggregator, AsyncHttpClient)
export default class TweetService {

  tweets = [];
  users = [];
  currentUser;
  content = '';

  constructor(ea, ac) {
    this.ea = ea;
    this.ac = ac;
  }

  /*isAuthenticated() {
    return this.ac.isAuthenticated();
  }*/

  register(firstName, lastName, email, password) {
    const status = {
      success: false,
      message: ''
    };

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    if (this.users[email] = newUser){
      status.success = true;
    }
    this.ea.publish(new NewUserStat(status));
  }

  login(email, password) {
    console.log(email);
    const user = {
      email: email,
      password: password
    };
    this.ac.authenticate('/api/users/aurAuthenticate', user);
  }

  logout() {
    const status = {
      success: false,
      message: ''
    };
    this.ac.clearAuthentication();
    this.ea.publish(new LoginStatus(new LoginStatus(status)));
  }

  tweet(content) {
    const Tweet = {
      content: content,
      tweeter: this.currentUser
    };
    this.tweets.push(Tweet);
  }

}
