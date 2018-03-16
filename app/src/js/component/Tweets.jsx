import React from 'react'

const Tweets = (props) => {
  if (props.tweets === null) {
    return (
      <div></div>
    );
  }

  const TweetsList = props.tweets.map(tweet => {
    if (tweet.retweeted_status != null) {
      return (
        <article class="tweet-container">
          <header>
            <img src={tweet.retweeted_status.user.profile_image_url_https} class="user_image"/>
            <b>{tweet.retweeted_status.user.screen_name}</b>
          </header>
          <li key={tweet.retweeted_status.id}>
            {tweet.retweeted_status.text}
          </li>
        </article>
      );
    }
    return (
      <article class="tweet-container">
        <header>
          <img src={tweet.user.profile_image_url_https} class="user_image"/>
          <b>{tweet.user.screen_name}</b>
        </header>
        <li key={tweet.id} id="tweet">
          {tweet.text}
        </li>
      </article>
    );
  });

  return (
    <ul>
      {TweetsList}
    </ul>
  )
}

export default Tweets
