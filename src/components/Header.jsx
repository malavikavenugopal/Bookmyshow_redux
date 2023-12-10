import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { search } from '../redux/movieSlice';


function Header() {
  const dispatch = useDispatch()
  return (
    <div>

<Navbar className='px-5' style={{  backgroundColor: "black"}}>
       
       <Navbar.Brand className='d-flex '>
    <Link to={'/'} style={{textDecoration:"none"}}> <h5 style={{color:'white',fontFamily: 'Afacad'}}>BOOK MY SHOW</h5></Link>  
  
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
   
       <Nav className="ms-auto">
      <form >
      
         <div className='d-flex  px-2 py-2 '>
         <input type="search" placeholder="What are you looking for?" className='form-control' style={{width:"300px",marginLeft:"30px"}}  onChange={(e)=>dispatch(search(e.target.value))}/>
    
         </div>
       
       </form> 
 
       </Nav>
     </Navbar.Collapse>
      
 
    
   </Navbar>
    </div>
  )
}

export default Header