import React from 'react'

/*
  最終的にはTweetHeaderをクリックすると
  プロフィールが表示されるようにする.

  user_idもここで表示させる
*/

const TweetHeader = (props) => {
  return (
    <header className="acount_wrapper">
      <img
      　　className="user_icon"
      　　src={props.user_icon}
      />
      <div className="name_info">
        <div className="user_name"><b>{props.user_name}</b></div>
        <div className="user_id">@{props.user_id}</div>
      </div>
    </header>
  )
}


export default TweetHeader
