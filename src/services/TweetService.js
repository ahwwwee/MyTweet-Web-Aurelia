import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';
import {LoginStatus, NewUserStat} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Fixtures, EventAggregator)
export default class TweetService {

  tweets = [];
  users = [];
  currentUser;

  constructor(data, ea) {
    this.tweets = data.tweets;
    this.users = data.users;
    this.ea = ea;
  }

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
    const status = {
      success: false,
      message: ''
    };

    if (this.users[email]) {
      if (this.users[email].password === password) {
        status.success = true;
        status.message = 'logged in';
      } else {
        status.message = 'Incorrect password';
      }
    } else {
      status.message = 'Unknown user';
    }
    this.currentUser = this.users[email];
    this.ea.publish(new LoginStatus(status));
  }

  logout() {
    const status = {
      success: false,
      message: ''
    };
    this.ea.publish(new LoginStatus(status));
  }

  tweet(content) {
    const Tweet = {
      content: content,
      tweeter: this.currentUser
    };
    this.tweets.push(Tweet);
    console.log(content);
  }

}
