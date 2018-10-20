import React, { Component } from 'react'
import Formula from './Formula';
import Display from './Display';
import Buttons from './Buttons';

export default class Calculator extends Component {
  render() {
    return (
      <div id='calc'>
        <Formula />
        <Display />
        <Buttons />
      </div>
    )
  }
}
