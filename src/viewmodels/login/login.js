import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from '../../services/TweetService';

@inject(tweetService, EventAggregator)
export class Login {

  constructor(ts, ea) {
    this.ea = ea
    this.tweetService = ts;
    this.prompt = '';
  }

  login(e) {
    this.tweetService.login(this.email, this.password);
  }
}
