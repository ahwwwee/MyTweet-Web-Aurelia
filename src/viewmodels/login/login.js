import {inject} from 'aurelia-framework';
import tweetService from '../../services/TweetService';

@inject(tweetService)
export class Login {

  constructor(ts) {
    this.tweetService = ts;
    this.prompt = '';
  }

  login(e) {
    this.showLogin = false;
    this.tweetService.login(this.email, this.password);
  }
}
