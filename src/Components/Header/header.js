import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header=()=>{
    return (
        <div className="navbar">
        <div className="navbarLeft">
            <Link to="/"><img className="navbar__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="error"/></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            
        </div>
        <div className="navbarRight">
        <Link to="/"><img className="navbar__icons" src="https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png" alt="error"/></Link>
        
  </div>
    </div>
    )
}

export default Header