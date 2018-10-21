import React, { Component } from 'react'

export default class SimpleButton extends Component {
  render() {
    return (
        <button>{this.props.text}</button>
    )
  }
}
