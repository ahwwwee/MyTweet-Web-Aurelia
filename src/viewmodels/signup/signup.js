import {inject} from 'aurelia-framework';
import tweetService from '../../services/TweetService';

@inject(tweetService)
export class signup {

  constructor(ts) {
    this.tweetService = ts;
  }

  register(e) {
    this.tweetService.register(this.firstName, this.lastName, this.email, this.password);
  }
}
