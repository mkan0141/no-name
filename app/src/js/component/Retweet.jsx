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
        <TweetHeader
          user_icon= {this.props.tweet.user.profile_image_url_https}
          user_name= {this.props.tweet.user.name}
          user_id  = {this.props.tweet.user.screen_name}
        />
        <li key={this.props.tweet.id}>
          {this.props.tweet.text}
        </li>
      </article>
    )
  }
}

export default Retweet
