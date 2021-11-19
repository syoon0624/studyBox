import React, { Component } from 'react'

export default class MyComponent extends Component {
    render() {
        const name = this.props.name;
        return (
            <span>
                {name} 
            </span>
        )
    }
}
