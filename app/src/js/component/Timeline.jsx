import React, {Component} from "react";

import SelectHeader from './SelectHeader'
import Tweets from './Tweets'

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  /*
    render
    -- <TimelineHeader /> ... Timelineのheader
    -- <tweets /> ... tweetを表示するcomponent
  */
  render() {
    return (
      <div className="timeline">
        <SelectHeader />
        <Tweets tweets={this.props.tweets} />
      </div>
    )
  }
}

export default Timeline
