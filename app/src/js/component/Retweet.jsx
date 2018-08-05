import React, { Component } from 'react'
import TweetHeader from './TweetHeader'

/*
  retweetの表示用component
*/

class Retweet extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.tweet)
    return (
      <article className="tweet-container">
        <div className="hoge">
          <div className="retweet retweet-font-size">{this.props.retweet_user} retweeted</div>
          <TweetHeader
            user_name= {this.props.tweet.user.name}
            user_id  = {this.props.tweet.user.screen_name}
            user_icon= {this.props.tweet.user.profile_image_url_https}
          />
          <li key={this.props.tweet.id} className="tweet tweet-text">
            {this.props.tweet.text}
          </li>
        </div>
      </article>
    )
  }
}

export default Retweet
