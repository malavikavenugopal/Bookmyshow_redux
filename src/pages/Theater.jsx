import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchMovie } from '../redux/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Cart';


function Theater() {
  const [show, setShow] = useState(false);
  const [seats ,setSeats] = useState("1")

  const [checkOut, setCheckOut] = useState(false)
  const handleClose = () =>{
    setShow(false);
    setSeats("1")
  } 
  const handleShow = () => {
    
    setShow(true);
  }

  const { id } = useParams()
  console.log(id);
  console.log(seats);
  const dispatch = useDispatch()
  const allMovies = useSelector((state) => state.movieSlice.allMovies)
  console.log(allMovies);
   const navigate = useNavigate()
  const movie = allMovies.find((item) => item.id == id)
  console.log(movie);
  useEffect(() => {
    dispatch(fetchMovie())
  }, [])
  const checkout = () =>{
   setCheckOut(true)
   setShow(false)
   
  }
  return (
    <div  style={{background:"black",minHeight:"580px",margin:'0px'}}>
     
<div className='d-flex px-5 align-items-center' style={{backgroundColor:" rgb(53, 53, 53)",height:"70px"}}>
<h1>{movie.name}-<span style={{fontSize:"23px"}}>{movie.language}</span></h1>

</div>

      {
        !checkOut &&
        <div className='px-5 py-5'>
        
<h3  style={{marginLeft:"100px"}}>Theaters</h3>


{
  movie?.theaters.map((item) => (
    <>
      <div className='d-flex align-items-center bg-light rounded-2 my-3 ' style={{margin:"100px"}}>
        <h6  style={{fontWeight:"bold"}}className='text-dark ms-3'>{item.name}</h6>
           <div style={{marginLeft:"50px"}}>
            {
              item.showtimes.map((item)=>(
                <>
               <button  style={{margin:'10px'}} className='btn btn-outline-dark'  onClick={handleShow}>{item}</button>
              
               <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
>
  <Modal.Header closeButton>
    <Modal.Title className='text-dark' >How Many Seats?</Modal.Title>
  </Modal.Header>
  <Modal.Body className='d-flex flex-column justify-content-center align-items-center'> 
    {
      seats=="1" &&
      <>
      <img height="100" src='https://tse1.mm.bing.net/th?id=OIP.YhC9gIZJXEefaKERUuTKVgHaEx&pid=Api&P=0&h=180'/>
      </>
    }
      
    {
      seats=="2" &&
      <>
      <img height="100" src='https://tse2.mm.bing.net/th?id=OIP.01gPyGvyrS5zj-UgMPbRywHaJA&pid=Api&P=0&h=180'/>
      </>
    }
    {
      seats=="3" &&
      <>
      <img height="100" src='https://tse2.mm.bing.net/th?id=OIP.6hXWRx1YeS-382X4wJub3QHaFI&pid=Api&P=0&h=180'/>
      </>
    }
    {
      seats=="4" &&
      <>
      <img height="100" src='https://tse3.mm.bing.net/th?id=OIP.9MpRdrsb4YEGYoZJTsN9yAHaEn&pid=Api&P=0&h=180'/>
      </>
    }
    <br></br>
    <div>
    <input for="1"  value="1" name="seats" type="radio" onChange={(e)=>setSeats(e.target.value)}/>
   <label className='text-dark' id="1">1</label>
    
   <input  value="2"  style={{marginLeft:"20px"}} for="1" name="seats" type="radio" onChange={(e)=>setSeats(e.target.value)}/>
   <label className='text-dark'id="1">2</label>
    
   <input   value="3"  style={{marginLeft:"20px"}} for="1" name="seats" type="radio" onChange={(e)=>setSeats(e.target.value)}/>
   <label  className='text-dark'id="1">3</label>
    
   <input  value="4" style={{marginLeft:"20px"}} for="1" name="seats" type="radio" onChange={(e)=>setSeats(e.target.value)}/>
   <label  className='text-dark'id="1">4</label>
   
    </div>

  </Modal.Body>

  
   
   <div className='d-flex flex-column  justify-content-center align-items-center'>
  
   <h6 className='text-dark' style={{fontSize:"14px"}}>CLASSIC</h6>
   <h5 className='text-dark' style={{fontSize:"15px"}}>Rs. 120.00</h5>
   
   <Button className='w-50 my-2' variant="dark"  onClick={checkout}>Select Seats</Button >
   <br></br>

   </div>
  
   
    

</Modal>
</>
              ))
            }
             <p style={{fontSize:"12px",color:"black"}}>Cancellation Available</p>
           </div>


           
      </div>
    </>
  ))
}
</div>
      }
      
       {
        checkOut &&
        <Cart id={movie.id} seats={seats} />
       }

    </div>
   
  )
}

export default Theater