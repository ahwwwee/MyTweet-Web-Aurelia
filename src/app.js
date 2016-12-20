import {inject, Aurelia} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {LoginStatus, NewUserStat} from './services/messages';

@inject(Aurelia, EventAggregator)
export class App {

  constructor(ea, au) {
    ea.subscribe(LoginStatus, msg => {
      if (msg.status.success === true) {
        au.setRoot('welcome').then(() => {
          this.router.navigateToRoute('tweet');
        });
      } else {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('login');
        });
      }
    });
    ea.subscribe(NewUserStat, msg => {
      if (msg.status.success === true) {
        au.setRoot('welcome').then(() => {
          this.router.navigateToRoute('login');
        });
      } else {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('welcome');
        });
      }
    });
    /*ea.subscribe(SignupPage, msg => {
      if (msg.status.bool === true) {
        au.setRoot('welcome ').then(() => {
          this.router.navigateToRoute('login');
        });
      } else {
        au.setRoot('app').then(() => {
          this.router.navigateToRoute('welcome');
        });
      }
    });*/
  }

  configureRouter(config, router) {
    config.title = 'My Tweet';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'viewmodels/welcome/welcome', nav: true, title: 'Welcome' },
      { route: 'login', name: 'login', moduleId: 'viewmodels/login/login', nav: true, title: 'Login' },
      { route: 'signup', name: 'signup', moduleId: 'viewmodels/signup/signup', nav: true, title: 'Signup' }
    ]);
    this.router = router;
  }
}
