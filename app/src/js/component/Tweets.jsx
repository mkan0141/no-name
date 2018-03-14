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
      return;
    }
    // console.log('debug: ' + this.props.tweets)

    const TweetsList = this.props.tweets.map((tweet) => {
      if (tweet.retweeted_status != null) {
        return (
          <tr>
            <td><img src={tweet.retweeted_status.user.profile_image_url}/></td>
            <td>
              <li key={tweet.retweeted_status.id} id="tweet">{tweet.retweeted_status.text}</li>
            </td>
          </tr>
        )
      }
      return (
        <tr>
          <td><img src={tweet.user.profile_image_url}/></td>
          <td>
            <li key={tweet.id} id="tweet">{tweet.text}</li>
          </td>
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
    return (
      <div>
        {this.TweetList()}
      </div>
    )
  }
}

export default Tweets;
