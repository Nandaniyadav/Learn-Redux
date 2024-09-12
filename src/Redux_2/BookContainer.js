import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import purchase_book from './BookAction'

const BookContainer = () => {
    const no_OfBook =  useSelector(state=>state.No_of_book);
    const dispatch  = useDispatch()
  return (
    <>
    <div>BookContainer</div>
    <h2>Number of book - {no_OfBook}</h2>
    <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
    </>
  )
}

export default BookContainer