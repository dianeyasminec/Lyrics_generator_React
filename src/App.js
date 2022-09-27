import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FavoritesSongs from './components/FavoritesSongs'
import Navigation from './components/Navigation'
import Search from './components/Search'
import Home from './components/Home'
import './css/app.css'
import genius from './genius.jpg'
import medias from "./data/medias.js";

export default function App(props) {

 const github = medias.map((el, index) => {
  return <a 
  className='medias'
  key={index}
   href={el.github}
   target="_blank"
   rel="noopener noreferrer">
    Github
    </a>
})

const linkedin = medias.map((el, index) => {
  return <a 
  className='medias'
  key={index}
  href={el.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  >linkedin
  </a>
})

const email = medias.map((el, index) =>{
  return <a 
  className='medias'
  key={index}
  href={el.email}
  target="_blank"
  rel="noopener noreferrer">
    Contact 
  </a>
})

// console.log(medias)
// console.log(github)
  return (
    <div>
      <div>
        <img src={genius} alt='genius logo'/>
      
        {github} 
        <br/>
        {linkedin}
        <br/>
        {email}

       
        </div>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Navigation/>}>
          <Route  index element={<Home github={props.github} />}/>
          <Route path  ='favoritesSongs'element={<FavoritesSongs/>}/>
          <Route path  ='search' element={<Search/>}/>

        </Route>
      </Routes>

    </BrowserRouter>
  
  
    </div>
  )
}

