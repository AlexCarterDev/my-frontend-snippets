import React, { Component } from 'react'

export default class Formula extends Component {
  render() {
    return (
      <div id='formula'>
        {this.props.str}
      </div>
    )
  }
}
