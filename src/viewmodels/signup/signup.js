import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from '../../services/TweetService';

@inject(tweetService, EventAggregator)
export class signup {

  constructor(ts, ea) {
    this.ea = ea;
    this.tweetService = ts;
  }

  register(e) {
    this.showSignup = false;
    this.tweetService.register(this.firstName, this.lastName, this.email, this.password);
  }
}
