import React, { Component } from 'react'

var config =  require('./../config/config.js')
import Twitter from 'twitter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      date: new Date(),
      tweets: null
    });
    this.twitter = new Twitter({
      consumer_key: config.consumer_key,
      consumer_secret: config.consumer_secret,
      access_token_key: config.access_token_key,
      access_token_secret: config.access_token_secret
    })
    this.GetTweet = this.GetTweet.bind(this)
    this.renderTimeline = this.renderTimeline.bind(this)
  }

  renderTimeline() {
    if(this.state.tweets == null) {
      console.log('tweet nothing')
      return ;
    }
     const TweetsList = this.state.tweets.map((tweet) =>{
       console.log(tweet.text)
        return (
          <li key={tweet.id} id="tweet">{tweet.text}</li>
        )
      }
    )
    console.log(TweetsList)
    return (
      <ul>
        {TweetsList}
      </ul>
    )
  }

  GetTweet() {
    var stream = this.twitter.stream('user');

    stream.on('data', function(event) {
  console.log(event.user.name + ': ' + event.text);
});

stream.on('error', function(error) {
  throw error;
});
/*
    this.twitter.stream('statuses/home_timeline', {count: 200}, (error, tweet, response) => {
      if (!error) {
        this.setState({
          tweets: tweet
        },() => console.log('in'))
      }else{
        console.log('error: ')
        console.log(error)
      }
    });
*/
  }

  render() {
    this.GetTweet()
    return (
      <div>
        <ul>{this.renderTimeline()}</ul>
      </div>
    )
  }
}

export default App
