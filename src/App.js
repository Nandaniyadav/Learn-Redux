// //////////////////////////      for components          /////////////////////////////

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



// --------------------------------  for Redux  --------------------------------------
import React from 'react'
import HomeContainers from './cotainers/HomeContainers';

const App = () => {
  return (
    <div>
    <HomeContainers/>
    </div>
  )
}

export default App

