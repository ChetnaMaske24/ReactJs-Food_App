import React from 'react'
import {Link} from 'react-router-dom';
import HomeImage from '../assets/pizza.jpg'
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'
      style={ {backgroundImage: `url(${HomeImage})`}}
      >
        <h1>Pro Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to = "/menu">
        <button>ORDER NOW</button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Home
