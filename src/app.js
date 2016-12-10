import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from './services/TweetService';
import {LoginStatus, LoginPage, SignupPage} from './services/messages';

@inject(EventAggregator, tweetService)
export class App {

  loggedIn = false;
  showLogin = false;
  showSignup = false;

  constructor(ea, ts) {
    this.tweetService = ts;
    ea.subscribe(LoginStatus, msg => {
      this.loggedIn = msg.status.success;
    });
    ea.subscribe(LoginPage, msg => {
      this.showLogin = msg.status.bool;
    });
    ea.subscribe(SignupPage, msg => {
      this.showSignup = msg.status.bool;
    });
  }

  loginPage() {
    this.showLogin = true;
    this.showSignup = false;
  }

  signup() {
    this.showSignup = true;
    this.showLogin = false;
  }

  register(e) {
    this.showSignup = false;
    this.showLogin = true;
    this.tweetService.register(this.firstName, this.lastName, this.email, this.password);
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    const status = this.tweetService.login(this.email, this.password);
    this.prompt = status.message;
    this.loggedIn = status.success;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }
}
