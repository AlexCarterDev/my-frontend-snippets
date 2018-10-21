import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div id='display'>
        {this.props.str}
      </div>
    )
  }
}
