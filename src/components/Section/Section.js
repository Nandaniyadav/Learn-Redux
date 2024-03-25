import React, { Component } from 'react'
import Item from '../Card'
import './Section.css'
import Paginations from '../Pagination/Paginations'

export class Section extends Component {

  render() {
    const { res } = this.props;
    return (
      <>
        <div className='cardStyle'>
          {res && res?.map((item, index) => (
            <Item item={item} />
          ))}

        </div>
        <div>
          <Paginations />
        </div>
      </>
    )
  }
}

export default Section