import React from 'react'
import PropTypes from 'prop-types'
// import {a} from 'react-router-dom'
export default function Navbar(props) {

  const RedTheme = () => {
    const body = document.body;
    if (body.style.backgroundColor === 'red') {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    } else {
      body.style.backgroundColor = 'red';
      body.style.color = 'white';
      props.ShowAlert("Red Theme  enabled" , "success")
    }
    
  };


  const AquaTheme = () => {
    const body = document.body;
    if (body.style.backgroundColor === 'aqua') {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    } else {
      body.style.backgroundColor = 'aqua';
      body.style.color = 'white';
      props.ShowAlert("Aqua Theme  enabled" , "success")
    }
    
    
  };
  return (



    <nav className={`navbar  bg-body-tertiary  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-dark" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
            <li className="nav-item">
              <a className="nav-a active text-dark" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-a text-dark" href="/about">{props.AboutUs}</a>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}


          <div onClick={RedTheme} className="red mx-2 my-2"></div>

          <div onClick={AquaTheme} className="aqua mx-2 my-2 "></div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={props.toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>


        </div>
      </div>
    </nav >

  )
}
// Setting Prop Types 

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutUs: PropTypes.string
}
Navbar.defaultProps = {
  title: 'set title',
  AboutUs: 'About Us'
}
