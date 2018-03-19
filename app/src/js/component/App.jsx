import React, {Component} from "react";
import Profile from './Profile';
import Timeline from './Timeline';

var config = require("./../config/config.js");
import Twitter from "twitter";

/*
    App.jsxでtwitter apiを叩く必要がないので
    apiを叩く部分はいずれ退避させる
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null
    };
    this.twitter = new Twitter({consumer_key: config.consumer_key, consumer_secret: config.consumer_secret, access_token_key: config.access_token_key, access_token_secret: config.access_token_secret});
    this.GetTweet = this.GetTweet.bind(this);

    this.twitter.get("statuses/home_timeline", {
      count: 200
    }, (error, tweet, response) => {
      if (!error) {
        this.setState({
          tweets: tweet
        }, () => console.log("in"));
      } else {
        console.log("error: ");
        console.log(error);
      }
    });
  }

  GetTweet() {
    var stream = this.twitter.stream("user");
    stream.on("data", event => {
      //console.log(event.user.name + ': ' + event.text);
      console.log("in GetTweet");
      var tweetsArray = this.state.tweets.slice();
      tweetsArray.unshift(event);
      this.setState({
        tweets: tweetsArray
      }, () => {
        console.log("in state");
      });
    });

    stream.on("error", function(error) {
      throw error;
    });
  }

  componentDidMount() {
    console.log("in");
    this.GetTweet();
  }

  render() {
    return (
      <div>
        <Profile />
        <Timeline tweets={this.state.tweets}/>
      </div>
    );
  }
}

export default App;
