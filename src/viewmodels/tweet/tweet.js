import {inject} from 'aurelia-framework';
import TweetService from '../../services/TweetService';

@inject(TweetService)
export class Tweet {

  constructor(ts) {
    this.TweetService = ts;
    this.content = ts.content;
  }

  makeTweet() {
    this.TweetService.tweet(this.content);
  }
}
