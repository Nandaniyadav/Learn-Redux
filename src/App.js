// //////////////////////////      for components          /////////////////////////////

import Learnfetchapi3 from "./API/Learnfetchapi3"

// import React, { Component } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Section from './components/Section';

// export class App extends Component {
//   async fetchData() {
//     let res = fetch('https://fakestoreapi.com/products/1')
//       .then(res => res.json())
//       .then(json => console.log(json))
//     return res
//   }

//   render() {
//     const data = this.fetchData()
//     return (
//       <div>
//         <Header />
//         <Section data={data} />
//         <Footer />
//       </div>
//     )
//   }
// }

// export default App;



////////////////////////    for Form  //////////////////////  

// import React from 'react';
// import Inputform from './Form/InputForm/Inputform';
// import Datatable from './Form/dataTable/Datatable';

// const App = () => {
//   return (
//     <div>
//       <Inputform/>
//       <Datatable/>
//     </div>
//   )
// }

// export default App


////////////////////////           for class component  ///////////

// import React, { Component } from 'react'
// import Classlearn from './ClassComponent/Class/Classlearn'

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Classlearn name={"Nandani"}/>
//       </div>
//     )
//   }
// }

// export default App



// ////--------------------------------  for Redux  --------------------------------------
// import React from 'react'
// import HomeContainers from './cotainers/HomeContainers';

// const App = () => {
//   return (
//     <div>
//     <HomeContainers/>
//     </div>
//   )
// }

// export default App

//----------------------------------------------  for Redux2--------------------------------------------------

// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './Redux_2/Store';
// import BookContainer from './Redux_2/BookContainer';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <BookContainer/>
//       </div>
//     </Provider>
//   )
// }

// export default App

//---------------------------------------------   for API ----------------------


// import React, { useEffect, useState } from 'react';
// import { getpots,getrandomApi } from './API/api';
// import Card from './API/Card';
// import UserCard from './API/UserCard';
// import './App.css'
// const App = () => {

//   const [data, setData] = useState(null);


//   const [card,setCard] = useState(null);



//   useEffect(() => {
//     getpots().then((posts) =>
//       setData(posts))
//   }, []);


//  useEffect(()=>{
//   getrandomApi().then((user)=>
//   setCard(user.results[0]))
//  },[])

// const refresh =()=>{
//   getrandomApi().then((user)=> setCard(user.results[0]))
// }

//   return (
//     <div>
//       {card && <UserCard mycard={card}/>}

//       <button className='apibutton' onClick={refresh}>Refesh Me</button>

//       {data ? data.map((e)=><Card title={e.title} body={e.body}/>): <li>No data</li>}
//     </div>
//   )
// }

// export default App

// ----------------------------------------------- for  Learnfetchapi3 file name-------------------------

import React, { useEffect } from 'react';
import {fakeapi} from './API/Learnfetchapi3';


const App = () => {

  useEffect(()=>{
    fakeapi().then((user)=>
    console.log(user)
    )
  },[]);
  return (
    <div>App</div>
  )
}

export default App