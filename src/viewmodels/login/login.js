import {inject} from 'aurelia-framework';
import tweetService from '../../services/TweetService';

@inject(tweetService)
export class Login {

  email = 'marge@simpson.com';
  password = 'secret';

  constructor(ts) {
    this.tweetService = ts;
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    this.tweetService.login(this.email, this.password);
  }
}
