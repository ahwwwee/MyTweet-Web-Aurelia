import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from '../../services/TweetService';
import {LoginStatus} from '../../services/messages';

@inject(tweetService, EventAggregator)
export class Login {

  constructor(ts, ea) {
    this.ea = ea
    this.tweetService = ts;
    this.prompt = '';
  }

  login(e) {
    this.showLogin = false;
    const status = this.tweetService.login(this.email, this.password);
    this.ea.publish(new LoginStatus(status));
  }
}
