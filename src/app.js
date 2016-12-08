import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from './services/TweetService';
import {LoginStatus} from './services/messages';

@inject(EventAggregator, tweetService)
export class App {

  loggedIn = false;
  showSignup = false;

  constructor(ea, ts) {
    this.tweetService = ts;
    ea.subscribe(LoginStatus, msg => {
      this.loggedIn = msg.status.success;
    });
  }

  register(e) {
    this.showSignup = false;
    this.tweetService.register(this.firstName, this.lastName, this.email, this.password);
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    const status = this.tweetService.login(this.email, this.password);
    this.prompt = status.message;
    this.loggedIn = status.success;
  }

  signup() {
    this.showSignup = true;
  }

  logout() {
    console.log('Logging out');
    this.loggedIn = false;
  }

  /*configureRouter(config, router) {
   config.map([
   { route: ['', 'login'], name: 'login', moduleId: 'viewmodels/login/login', nav: true, title: 'Login' },
   { route: 'signup', name: 'signup', moduleId: 'viewmodels/signup/signup', nav: true, title: 'Signup' }
   ]);
   this.router = router;
   }*/
}
