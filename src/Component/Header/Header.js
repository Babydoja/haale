import React, { useState } from 'react'
// import {FaApple} from 'react-icons/fa' 
// import image from '../Assets/banner2.jpg'
import './Header.css'

// import { getImageUrl } from './utils.js';


// const per={
//   name:"winner",
//   theme:{
//     color:"blue",
//     background:"black"
//   }
// }
// const first_name ="emmy"
const button=()=>{
   alert("welcome here")
}
// const name = "oladoja"
// const person ={
//   name:"owura",
//   theme: {
//     color:"red",
//     background:"green"
//         }
// // }
// const Avatar= () =>{
//   return (
//     <img
//       className="avatar"
//       src="https://i.imgur.com/1bX5QH6.jpg"
//       alt="Lin Lanying"
//       width={100}
//       height={200}
//     />
//   );
// }

// const Details=()=>{
//   return(
//     <img src='https://i.imgur.com/1bX5QH6.jpg'
//     alt='hat picture'
//     width={100}
//     height={200}/>
//   )
// }
// function Cend ({size,per}){
//   return (
//     <img
//     className='avat'
//     src='https://i.imgur.com/1bX5QH6.jpg'
//     width={size}
//     alt={per.name}
//     />
//   )
// }
// function Cender({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       // src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
const peole = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];


const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]


// const list =people.map(product=>
//   <li>{product}</li>
//   )
// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );
const listItems=products.map(product=>
  <li key={product.id}>{product.title}</li>
  )
const list=people.map(persons=>
  <li>{persons}</li>
  )
const chemist=peole.map(peoles=>
  <li key={peoles.id}>{peoles.profession}</li>)
const Header = () => {

const [count,setCount] = useState(0)
  function handleClick() {
    setCount(count+1)
  }
  // let index = 0
  // function handleClick() {
  //   index= index+1
  // }
  const [index, setIndex] = useState(0)
    function handleClick() {
   setIndex(index+1)
  }
  // function Clock({ time }){
  return (
    <div>
      
      {/* <button onClick={handleClick}>next</button> */}
     {/* <h1>welcome to class</h1>
       <FaApple size={40} color='blue'/>
       <img src={image} width={40}/>
       <h2>{name}buy cloth</h2>
      <div style={per.theme}>
      <h2>{per.name}</h2>
      </div>
      <div style={person.theme}>
      <h1>{person.name}</h1>
      </div>
      <Cend
      size={400}
      person={emmy}/>
      <Avatar/>
      <Cender
      person={"oladoja"}
      size={500} */}
      {/* />
      <Details
      size={700}/> */}
     
      <ul>{list}</ul>
      <ul>{list}</ul>
      <ul>{chemist}</ul>
      <button onClick={handleClick}>{count}</button>
      <ul>{listItems}</ul>
      <button onClick={button}>click here</button>
  
    </div>
    

  )
}


export default Header