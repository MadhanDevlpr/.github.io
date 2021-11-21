import React from 'react'
import logo from '../images/logo.png'
function Navbar() {
  const navtoggle = () =>{
    if (window.scrollY >= 20){
      navShrink()
    }
    else{
      navExpand()
    }
  }
  window.addEventListener('scroll',navtoggle)
  const navShrink = () =>{
    document.getElementsByClassName('navbar')[0].classList.replace('p-4','p-1');
    document.getElementsByClassName('navbar')[0].classList.replace('bg-transparent','bg-dark');
  }
  const navExpand = () =>{
    document.getElementsByClassName('navbar')[0].classList.replace('p-1','p-4')
    document.getElementsByClassName('navbar')[0].classList.replace('bg-dark','bg-transparent')
    document.getElementsByClassName('navbar')[0].style.boxShadow = "none"
  }
  
  
    return (
        <div>
            <nav id="navbar" id="navbar-nav" className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top p-4">
              <a className="navbar-brand" href="#header">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M A D H A N
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active m-3">
                    <a className="nav-link" href="#header">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link" href="#projectss">Projects</a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link" href="#feedback">Feedback</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
