import {inject} from 'aurelia-framework';
import TweetService from '../../services/TweetService';

@inject(TweetService)
export class tweetList {
  tweets = []

  constructor(ts) {
    this.TweetService = ts;
    this.tweets = this.TweetService.tweets;
  }
}
