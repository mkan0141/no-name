import React from 'react'

/*
  最終的にはTweetHeaderをクリックすると
  プロフィールが表示されるようにする.

  user_idもここで表示させる
*/

const TweetHeader = (props) => {
  return (
    <header className="account_wrapper">
      <div className="user_icon">
      <img
        src={props.user_icon}
  　 　  className="user_icon"
      />
      </div>
      <div className="user_info tweet">
        <div className="user_name"><b>{props.user_name}</b></div>
        <div className="user_id">@{props.user_id}</div>
      </div>
    </header>
  )
}

/*
const ReTweetHeader = (props) => {
  return (

  )
}
*/
export default TweetHeader
