import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import Fixtures from './fixtures';
import {LoginStatus} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';
import TweetService from './TweetService';

@inject(HttpClient, Fixtures, EventAggregator, TweetService)
export default class AsyncHttpClient {

  currentUser;

  constructor(httpClient, fixtures, ea, ts) {
    this.http = httpClient;
    this.http.configure(http => {
      http.withBaseUrl(fixtures.baseUrl);
    });
    this.ea = ea;
    this.ts = ts;
  }

  get(url) {
    return this.http.get(url);
  }

  post(url, obj) {
    return this.http.post(url, obj);
  }

  delete(url) {
    return this.http.delete(url);
  }

  tweet(url, tweet) {
    this.http.post(url, tweet);
  }

  authenticate(url, user) {
    this.http.post(url, user).then(response => {
      const status = response.content;
      this.currentUser = status.user;
      if (status.success) {
        localStorage.tweet = JSON.stringify(response.content);
        this.http.configure(configuration => {
          configuration.withHeader('Authorization', 'bearer ' + response.content.token);
        });
      }
      this.ea.publish(new LoginStatus(status));
    }).catch(error => {
      const status = {
        success: false,
        message: 'service not available'
      };
      this.ea.publish(new LoginStatus(status));
    });
  }

  clearAuthentication() {
    localStorage.tweet = null;
    this.http.configure(configuration => {
      configuration.withHeader('Authorization', '');
    });
  }

  /*isAuthenticated() {
    let authenticated = false;
    if (localStorage.tweet !== 'null') {
      authenticated = true;
      this.http.configure(http => {
        const auth = JSON.parse(localStorage.tweet);
        http.withHeader('Authorization', 'bearer ' + auth.token);
      });
    }
    return authenticated;
  }*/
}
