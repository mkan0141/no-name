import React, { Component } from 'react'

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
        <header>
          <img src={this.props.tweet.user.profile_image_url_https} className="user_image"/>
          <b>{this.props.tweet.user.screen_name}</b>
        </header>
        <div key={this.props.tweet.id} id="tweet">
          {this.props.tweet.text}
        </div>
      </article>
    )
  }
}

export default Tweet
