import tweetService from '../../services/TweetService';
import {inject} from 'aurelia-framework';

@inject(tweetService)
export class Logout {

  constructor(ts) {
    this.ts = ts;
  }

  logout() {
    console.log('logging out');
    this.ts.logout();
  }
}
