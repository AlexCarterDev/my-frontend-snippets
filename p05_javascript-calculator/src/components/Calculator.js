import React, { Component } from 'react'
import DisplayContainer from '../containers/DisplayContainer';
import FormulaContainer from '../containers/FormulaContainer';
import ButtonsContainer from '../containers/ButtonsContainer';

export default class Calculator extends Component {
  render() {
    return (
      <div id='calc'>
        <FormulaContainer />
        <DisplayContainer />
        <ButtonsContainer />
      </div>
    )
  }
}
