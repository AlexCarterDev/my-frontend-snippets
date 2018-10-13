import React, { Component } from 'react'

export default class Volume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vol: 100
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.volumeChanged(e.target.value);
        this.setState({
            vol: e.target.value
        })
    }

    render() {
        return (
            <div id='slider-container'>
                <input type="range" min="1" max="100" className="slider" value={this.state.vol} onChange={this.handleChange}/>
            </div>
        )
    }
}