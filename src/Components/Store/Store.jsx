import React, { Component } from 'react'
import ButtonArray from '../ButtonArray/ButtonArray';
import TabContent from '../TabContent/TabContent';

export default class Store extends Component {
    render() {
        return (
            <div className="col-6 p-0 m-0">
                <div>
                    {/* Nav tabs */}
                    <ButtonArray />
                    {/* Tab panes */}
                    <TabContent addCloth={this.props.addCloth} />
                </div>

            </div>
        )
    }
}
