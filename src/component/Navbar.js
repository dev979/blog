import React from 'react';   
import PropTypes from 'prop-types';
// shortform of prop-types ->impt  
// shortform of react -> rfc
import {Link} from 'react-router-dom';
export default function Navbar(props) {


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link disabled" to="/">Contact Us</Link>
        </li>
      </ul>

      
     <button className='btn btn-success' onClick={props.changeBg("green")}>Green</button>
     <button className='btn btn-primary ms-2' onClick={props.changeBg("blue")}>blue</button>
     <button className='btn btn-danger me-2 ms-2' onClick={props.changeBg("red")}>red</button>
     <button className='btn btn-warning me-2' onClick={props.changeBg("yellow")}>yellow</button>


      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-5" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable Dark Mode':' Enable Light Mode'}</label>
</div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

// Navbar.defaultProps={
//     title : 'Dev',
//     about : 'About Dev'
// }
