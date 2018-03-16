import React, {Component} from "react";
import Tweets from './Tweets'

class Timeline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Tweets tweets={this.props.tweets}/>)
  }
}

export default Timeline
