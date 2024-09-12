import React from 'react';
import './UserCard.css'

const UserCard = (props) => {
    console.log("props",props)
  return (
    <div className='maimdiv'>
        <img src=''/>
        <h1 className='textstyle'>Name : {props.mycard.id.name}</h1>
        <p className='textstyle'> Cell : {props.mycard.cell}</p>
        <p className='textstyle'> Age : {props.mycard.dob.age}</p>
        <p className='textstyle'> City : {props.mycard.location.city}</p>
    </div>
  )
}

export default UserCard