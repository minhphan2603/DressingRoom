import React, { Component } from 'react'
import BtnArr from '../../Data/buttonArray';
import TabPane from '../TabPane/TabPane';

export default class TabContent extends Component {
    render() {
        return (
            <div className="tab-content">
                {BtnArr.map((btn,i) => <TabPane key={i} type={btn.type} index={i} addCloth={this.props.addCloth} />)}
            </div>
        )
    }
}
