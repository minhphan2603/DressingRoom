import React, { Component } from 'react'
import Button from '../Button/Button';
import BtnArr from '../../Data/buttonArray';

export default class ButtonArray extends Component {
    render() {
        return (
            <ul className="nav nav-tabs border justify-content-around">
                {BtnArr.map((btn,i) => <Button key={i} type={btn.type} showName={btn.showName} index={i}/>)}
            </ul>
        )
    }
}
