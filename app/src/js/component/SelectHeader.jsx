import React, {Component} from 'react'

class SelectHeader extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="select-header">
        <img
          src="./image/home.png"
          className="header-image"
        />
        <b className="header-name">Home</b>
      </div>
    )
  }
}

export default SelectHeader
