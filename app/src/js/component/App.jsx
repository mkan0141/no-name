import React, {Component} from 'react'
import Tweets from './Tweets'

var config = require('./../config/config.js')
import Twitter from 'twitter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({date: new Date(), tweets: null});
    this.twitter = new Twitter({consumer_key: config.consumer_key, consumer_secret: config.consumer_secret, access_token_key: config.access_token_key, access_token_secret: config.access_token_secret})
    this.GetTweet = this.GetTweet.bind(this)
    this.renderTimeline = this.renderTimeline.bind(this)

    this.twitter.get('statuses/home_timeline', {
      count: 200
    }, (error, tweet, response) => {
      if (!error) {
        this.setState({
          tweets: tweet
        }, () => console.log('in'))
      } else {
        console.log('error: ')
        console.log(error)
      }
    });
  }

  renderTimeline() {
    if (this.state.tweets == null) {
      console.log('tweet nothing')
      return;
    }

    const TweetsList = this.state.tweets.map((tweet) => {
      console.log(tweet)
      return (
        <li key={tweet.id} id="tweet">{tweet.text}</li>
      )
    })

    return (
      <ul>
        {TweetsList}
      </ul>
    )
  }

  GetTweet() {
    var stream = this.twitter.stream('user');
    stream.on('data', (event) => {
      //console.log(event.user.name + ': ' + event.text);
      console.log('in GetTweet')
      var tweetsArray = this.state.tweets.slice()
      tweetsArray.unshift(event)
      this.setState({
        tweets: tweetsArray
      }, () => {console.log('in state')})

    });

    stream.on('error', function(error) {
      throw error;
    });
    /*

    this.twitter.get('statuses/home_timeline', {count: 200}, (error, tweet, response) => {
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

  componentDidMount() {
    console.log('in')
    this.GetTweet();
  }

  render() {
    return (
      <div>
        <Tweets tweets={this.state.tweets} />
      </div>
    )
  }
}

export default App
