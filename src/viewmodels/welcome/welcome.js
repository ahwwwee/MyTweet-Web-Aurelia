import {inject} from 'aurelia-framework';
import TweetService from '../../services/TweetService';

@inject(TweetService)
export class welcome {

  constructor(ts) {
    this.TweetService = ts;
  }
}
