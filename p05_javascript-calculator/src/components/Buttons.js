import React, { Component } from 'react'

export default class Buttons extends Component {
  render() {
    return (
      <div id='buttons'>
        <button id='clear' onClick={this.props.clear}>AC</button>
        <button id='divide' onClick={() => this.props.addOperation('/')}>/</button>
        <button id='multiply' onClick={() => this.props.addOperation('*')}>x</button>
        <button id='seven' onClick={() => this.props.addDigit('7')}>7</button>
        <button id='eight' onClick={() => this.props.addDigit('8')}>8</button>
        <button id='nine' onClick={() => this.props.addDigit('9')}>9</button>
        <button id='subtract' onClick={() => this.props.addOperation('-')}>-</button>
        <button id='four' onClick={() => this.props.addDigit('4')}>4</button>
        <button id='five' onClick={() => this.props.addDigit('5')}>5</button>
        <button id='six' onClick={() => this.props.addDigit('6')}>6</button>
        <button id='add' onClick={() => this.props.addOperation('+')}>+</button>
        <button id='one' onClick={() => this.props.addDigit('1')}>1</button>
        <button id='two' onClick={() => this.props.addDigit('2')}>2</button>
        <button id='three' onClick={() => this.props.addDigit('3')}>3</button>
        <button id='equals' onClick={() => this.props.addOperation('=')}>=</button>
        <button id='zero' onClick={() => this.props.addDigit('0')}>0</button>
        <button id='decimal' onClick={() => this.props.addDigit('.')}>.</button>
      </div>
    )
  }
}
