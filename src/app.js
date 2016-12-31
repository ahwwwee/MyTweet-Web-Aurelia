import {inject, Aurelia} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {LoginStatus, NewUserStat} from './services/messages';
import tweetService from './services/TweetService';

@inject(tweetService, Aurelia, EventAggregator)
export class App {

  constructor(ts, au, ea) {
    this.au = au;
    this.ts = ts;
    ea.subscribe(LoginStatus, msg => {
      if (msg.status.success === true) {
        au.setRoot('home').then(() => {
          this.router.navigateToRoute('home');
        });
      } else {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('signup');
        });
      }
    });
    ea.subscribe(NewUserStat, msg => {
      if (msg.status.success === true) {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('login');
        });
      } else {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('home');
        });
      }
    });
  }

  configureRouter(config, router) {
    config.title = 'My Tweet';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'viewmodels/welcome/welcome', nav: true, title: 'Welcome' },
      { route: 'login', name: 'login', moduleId: 'viewmodels/login/login', nav: true, title: 'Login' },
      { route: 'signup', name: 'signup', moduleId: 'viewmodels/signup/signup', nav: true, title: 'Signup' }
    ]);
    config.mapUnknownRoutes(instruction => {
      return 'home';
    });
    this.router = router;
  }

  /*attached() {
    if (this.ts.isAuthenticated()) {
      this.au.setRoot('home').then(() => {
        this.router.navigateToRoute('tweet');
      });
    }
  }*/
}
