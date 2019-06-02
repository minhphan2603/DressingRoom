import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {name, imgSrc_jpg , type , imgSrc_png} = this.props.item;
        return (
            <div className="card m-1 p-0" style={{width: '30%'}} onClick={() => this.props.addCloth(type,imgSrc_png)}>
                <img className="card-img-top" src={imgSrc_jpg} alt="" />
                <div className="card-body">
                    <h4 className="card-title" style={{fontSize: 15}}>{name}</h4>
                </div>
            </div>

        )
    }
}
