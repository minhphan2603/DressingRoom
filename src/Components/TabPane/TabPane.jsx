import React, { Component } from 'react'
import Data from '../../Data/Data';
import Card from '../Card/Card';

export default class TabPane extends Component {
  render() {
    const {type, index, addCloth} = this.props;
    return (
        <div className={"tab-pane container m-0 p-0 border bg-light" + (index === 0 ? ' active' : '')} id={type}>
            <div className='d-flex flex-wrap'>
                {Data.map((item,i) => item.type === type ? <Card key={i} item={item} addCloth={addCloth}/> : null )}
            </div>
        </div>
    )
  }
}
