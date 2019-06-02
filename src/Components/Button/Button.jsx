import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const {showName, type, index} = this.props;
        return (
            <li className="nav-item p-0">
                <a className={"nav-link text-center p-2 m-0" + (index === 0 ? " active" : '')} data-toggle="tab" href={'#'+type} style={{fontSize: 12}}>{showName}</a>
            </li>
        )
    }
}
