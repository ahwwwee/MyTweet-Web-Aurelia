import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from './services/TweetService';
import {LoginStatus} from './services/messages';

@inject(EventAggregator, tweetService)
export class App {

  loggedIn = false;
  showLogin = false;
  showSignup = false;

  constructor(ea, ds) {
    this.tweetService = ds;
    ea.subscribe(LoginStatus, msg => {
      this.loggedIn = msg.status.success;
    });
  }

  login() {
    this.showLogin = true;
    this.showSignup = false;
  }

  signup() {
    this.showSignup = true;
    this.showLogin = false;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }
}
