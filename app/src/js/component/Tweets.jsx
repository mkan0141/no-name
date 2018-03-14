import React, {Component} from 'react'

class Tweets extends Component {
  constructor(props) {
    super(props)
    this.TweetList = this.TweetList.bind(this)
  }

  TweetList() {
    console.log(typeof(this.props.tweets))
    // console.log(this.props.tweets)
    if (this.props.tweets == null) {
      // console.log('tweet nothing')
      return ;
    }
    // console.log('debug: ' + this.props.tweets)
    this.props.tweets.map((tweet) => {
      // console.log(' in ' + tweet.text)
    })

    const TweetsList = this.props.tweets.map((tweet) => {
      // console.log(tweet)
      return (
        <tr>
          <td><img src={tweet.user.profile_image_url} /></td>
          <td><li key={tweet.id} id="tweet">{tweet.text}</li></td>
        </tr>
      )
    })

    // console.log('List' + TweetsList)
    return (
      <ul>
        {TweetsList}
      </ul>
    )
  }

  render() {
    return(
      <div>
      {this.TweetList()}
      </div>
    )
  }
}

export default Tweets;
