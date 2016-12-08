import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import tweetService from '../../services/tweetService';
import {LoginStatus} from '../../services/messages';

@inject(EventAggregator, tweetService)
export class signup {

  firstName = 'Marge';
  lastName = 'Simpson';
  email = 'marge@simpson.com';
  password = 'secret';

  constructor(ea, ts) {
    this.ea = ea;
    this.tweetService = ts;
  }

  register() {
    this.showSignup = false;
    this.tweetService.addUser(this.firstName, this.lastName, this.email, this.password);
    const status = this.tweetService.login(this.email, this.password);
    this.ea.publish(new LoginStatus(status));
  }
}
