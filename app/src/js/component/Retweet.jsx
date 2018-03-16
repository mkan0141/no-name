import React, { Component } from 'react'

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
        <header>
          <img src={this.props.tweet.user.profile_image_url_https} className="user_image" />
          <b>{this.props.tweet.user.screen_name}</b>
        </header>
        <li key={this.props.tweet.id}>
          {this.props.tweet.text}
        </li>
      </article>
    )
  }
}

export default Retweet
