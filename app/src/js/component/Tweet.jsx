import React, { Component } from 'react'

import TweetHeader from './TweetHeader'
/*
  retweetではない普通のtweetの表示用component
*/

class Tweet extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <article className="tweet-container">
        <TweetHeader
        user_icon= {this.props.tweet.user.profile_image_url_https}
        user_name= {this.props.tweet.user.name}
        user_id  = {this.props.tweet.user.screen_name}
        />
        <div key={this.props.tweet.id} id="tweet">
          {this.props.tweet.text}
        </div>
      </article>
    )
  }
}

export default Tweet
