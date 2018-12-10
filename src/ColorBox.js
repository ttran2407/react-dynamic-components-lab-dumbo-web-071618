import React, { Component } from 'react';

export default class ColorBox extends Component {

  renderColorBox = function (opacity){
    if (opacity >=0.2){
      return <ColorBox opacity = {opacity - 0.1}/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* your conditional code here! */
        this.renderColorBox(this.props.opacity)}
      </div>
    )
  }

}
