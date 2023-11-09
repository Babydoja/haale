import React from 'react'
import './Wura.css'
import {BiLogoTwitter}from 'react-icons/bi'
import image from '../Assets/banner2.jpg'
const images='https://media.istockphoto.com/id/1419580307/photo/students-walking-on-the-university-campus.webp?b=1&s=170667a&w=0&k=20&c=TS0ztqu6cSISuog4lxNHs3PgnGgRRm-Ld1lToobLwSA='
const greeting ="welcome to parach ict"
const logo='TRAINING STUDIO'
const Details=()=>{
    return(
        <img src='https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=612x612&w=0&k=20&c=Ur3moWl1fKFms-6UACseglMjoYAynYKzsanZpgK8lFk='
        width={200}
        height={100}/>
    )
}
const person={
    name:"owura",
    age:15,
    bestcolor:'red',
    theme:{
        color:"red",
        background:"blue"
    }

}
const cends=()=>{
    return(
        <img src='https://media.istockphoto.com/id/1170902181/photo/the-back-view-of-graduates-wearing-black-gowns-to-prepare-for-university-degrees.jpg?s=612x612&w=0&k=20&c=_9c3-jpssClh0N4Fd1fdDlkvfQ51vRfH2hbX2tcjoHo='/>
    )
}
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
const list =people.map(peoples=>
    <li>{peoples}</li>
    )
const Wura = () => {
  return (
    <div>
        <div>{<Details/>}</div>
        <h1>{greeting}</h1>
        <h2>{logo}</h2>
        <div>{images}</div>
        <BiLogoTwitter size={30} color='red'/>
        <img src={image} width={30}/>
        <div>{<cends/>}</div>
        <h1 style={person.theme}>{person.age}</h1>
        <p>{people}</p>
        <ol>{list}</ol>
    </div>
  )
}

export default Wura