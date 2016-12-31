import {inject} from 'aurelia-framework';
import tweetService from '../../services/TweetService';

@inject(tweetService)
export class Tweet {

  content = '';

  constructor(ts) {
    this.tweetService = ts;
    this.content = ts.content;
  }

  makeTweet() {
    this.tweetService.tweet(this.content);
  }
}
