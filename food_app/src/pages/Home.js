import React from 'react'
import {Link} from 'react-router-dom'
import Pizza from '../assets/Piz.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Pizza})`}}>
        <div className='headercontainer'>
            <h1>Pizza Hub</h1>
            <p> PIZZA TO FIT ANY TASTE</p>
            <Link to='/menu'>
            <button>Order Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;