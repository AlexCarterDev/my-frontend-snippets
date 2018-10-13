import React, { Component } from 'react'

export default class PlayButton extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.simulatePressButton = this.simulatePressButton.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    play() {
        console.log('PlayButton ' + this.props.id + ': play');
        new Audio(this.props.src).play();
        this.props.onClick();
    }

    simulatePressButton() {
        var element = document.getElementById(this.props.id);
        element.classList.add('button-green-active');
        setTimeout(() => {
            element.classList.remove('button-green-active');
        }, 100);
    }

    handleKeydown(e) {
        if (e.keyCode === this.props.keyCode) {
            console.log('keydown ' + e.keyCode);
            this.simulatePressButton();
            this.play();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        console.log('PlayButton ' + this.props.id + ': render');
        return (
            <button 
                id={this.props.id} 
                className={'button-green'}
                onClick={this.play}
            >
                {this.props.text}
                <audio>
                    <source src={this.props.src} />
                </audio>
            </button>
        )
    }
}