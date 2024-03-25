import React, { Component } from 'react';
import './inputform.css';

 const handlechange =()=>{
  
 }
export class inputform extends Component {
  render() {
    return (
      <>
        <form className='formstyle'>
            <fieldset style={{height:"100%"}}>
                <legend>Form</legend>
                <div>Name: <input className='nameinput' type='text' placeholder='Enter Your Name' onChange={handlechange}></input></div>
                <div>Address: <input className='addressinput' type='text' placeholder='Enter Your Address' ></input></div>
                <div>Age : <input className='ageinput' type='number' placeholder='Enter Your Age'></input></div>
                <div>
                    <button className='submitbtn'>Submit</button>
                </div>
            </fieldset>
        </form>
      </>
    )
  }
}

export default inputform