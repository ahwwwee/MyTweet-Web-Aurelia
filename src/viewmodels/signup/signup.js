import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from '../../services/TweetService';
import {NewUserStat} from '../../services/messages';

@inject(tweetService, EventAggregator)
export class signup {

  constructor(ts, ea) {
    this.ea = ea;
    this.tweetService = ts;
  }

  register(e) {
    this.showSignup = false;
    const status = this.tweetService.register(this.firstName, this.lastName, this.email, this.password);
    console.log(this.email)
    this.ea.publish(new NewUserStat(status));
  }
}
