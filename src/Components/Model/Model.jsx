import React, { Component } from 'react'
import './Model.css';
export default class Model extends Component {
    render() {
        const {
            topclothes,
			botclothes,
			shoes,
			handbags,
            hairstyle,
            necklaces, 
			background
        } = this.props.cloth;
        return (
            <div className="col-6 p-0 m-0" >
                <div className="contain" >
                    <div className="body">
                    </div>
                    <div className="model">
                    </div>
                    <div className="bikinitop">
                    </div>
                    <div className="bikinibottom">
                    </div>
                    <div className="feetleft">
                    </div>
                    <div className="feetright">
                    </div>
                    <div className='background' style={background} >
                    </div>
                    <div style={topclothes}>
                    </div>
                    <div style={botclothes}>
                    </div>
                    <div style={shoes}>
                    </div>
                    <div style={handbags}>
                    </div>
                    <div style={necklaces}>
                    </div>
                    <div style={hairstyle}>
                    </div>
                </div>
            </div>

        )
    }
}
