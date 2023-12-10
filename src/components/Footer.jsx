import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:"black"}}>

<div class="row text-center">
      <div class="col-md-4 box">
        <span class="copyright quick-links">Copyright &copy; bookmyshow</span>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline social-buttons m-2">
          <li class="list-inline-item px-2">
            <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          </li>
          <li class="list-inline-item px-2">
            <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          </li>
          <li class="list-inline-item px-2">
            <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 box">
        <ul class="list-inline quick-links">
          <li class="list-inline-item">
            <a href="#" style={{textDecoration:"none",color:"white"}}>Privacy Policy</a>
          </li>
          <li class="list-inline-item" >
            <a href="#"  style={{textDecoration:"none",color:"white"}}>Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>


    </div>
  )
}

export default Footer