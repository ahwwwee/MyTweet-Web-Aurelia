import {inject, Aurelia} from 'aurelia-framework';

@inject(Aurelia)
export class Home {

  constructor(au) {
    this.aurelia = au;
  }

  configureRouter(config, router) {
    config.map([
      { route: ['home'], name: 'home', moduleId: 'viewmodels/tweet/tweet', nav: true, title: 'Tweet' },
      { route: 'tweetlist', name: 'tweetlist', moduleId: 'viewmodels/tweetList/tweetList', nav: true, title: 'Tweetlist' },
      { route: 'users', name: 'users', moduleId: 'viewmodels/users/users', nav: true, title: 'Users' },
      { route: 'logout', name: 'logout', moduleId: 'viewmodels/logout/logout', nav: true, title: 'Logout' }
    ]);
    config.mapUnknownRoutes(instruction => {
      return 'tweet';
    });
    this.router = router;
  }
}
