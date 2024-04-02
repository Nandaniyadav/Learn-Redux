import React from 'react';
import './CardStyle.css';

const Card = (props) => {
  return (
    <div>
        <h2 className='titlestyle'>{props.title}</h2>
        <h4 className='bodystyle'>{props.body}</h4>
    </div>
  )
}

export default Card