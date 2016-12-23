import {inject} from 'aurelia-framework';
import TweetService from '../../services/TweetService';

@inject(TweetService)
export class home {

  constructor(ts) {
    this.TweetService = ts;
  }
}
