import React from 'react'
import Tweet from './Tweet'
import Retweet from './Retweet'

const Tweets = (props) => {
  if (props.tweets === null) {
    return (
      <div></div>
    );
  }
/*
  <Retweet />
  <Tweet />
  の二つのコンポーネンにと分離させる
*/
  const TweetsList = props.tweets.map(tweet => {
    if (tweet.retweeted_status != null) {
      return <Retweet tweet={tweet.retweeted_status} retweet_user={tweet.user.name}/>
    } else {
      return <Tweet tweet={tweet} />
    }
  });

  return (
    <div className="tweet-list">
      {TweetsList}
    </div>
  )
}

export default Tweets
