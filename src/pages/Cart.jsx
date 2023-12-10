import React from 'react'
import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { fetchMovie } from '../redux/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Cart({ id, seats }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const allMovies = useSelector((state) => state.movieSlice.allMovies)
    console.log(allMovies);

    const movie = allMovies.find((item) => item.id == id)
    console.log(movie);
    console.log(seats);
 
    const ytvideo = `https://www.youtube.com/embed/${movie.trailer}`

    useEffect(() => {
        dispatch(fetchMovie())
    }, [])
    const handleCheckout = ()=>{

        navigate('/success')
    }

    return (
        <div style={{marginTop:"10px"}}>
         
            
            <div className="row">
                <div className="col-lg-8" style={{position:"relative"}}>
       <img className='w-100' style={{borderRadius:"7px"}} height={380}src={movie.cover}/>
       <div className='gradient d-flex justify-content-between align-items-center' style={{postion:"absolute"}}>
        <div>
        <h5 className='px-3'>{movie.name}</h5>
       <p  className='px-3'>{movie.about}</p>
        </div>
   
       <div>

       <button className='btn btn-outline-light px-4'  onClick={handleShow}>Trailer</button>

       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <iframe width="460" height="360" src={ytvideo}title="LEO - Naa Ready Lyric Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    
        </Modal.Body>
      
      </Modal>
       </div>
       </div>

                </div>
                <div className="col-lg-4">
                    <div className='card px-3 py-3'>
                        <h5>BOOKING SUMMARY</h5>
                        <br></br>
                        <div className='d-flex justify-content-between text-dark'>
                            <h6>CLASSIC ( {seats > 1 && <>{seats} Tickets </>}  {seats == 1 && <>{seats} Ticket </>})</h6>
                            <h6>Rs. {seats * 120}.00</h6>

                        </div>
                        <br></br>
                        <div className='d-flex justify-content-between'>
                            <p className='text-dark'>Convenience Fee</p>
                            <p className='text-dark'>Rs. {seats * 25}.00</p>
                        </div>
                        <hr></hr>
                        <div className='d-flex justify-content-between'>
                            <h6 className='text-dark'>Sub Total</h6>
                            <h6 className='text-dark'>Rs. {seats * 120 + seats * 25}.00</h6>

                        </div>
                        <div style={{backgroundColor:"black",color:"white",margin:"10px",padding:"10px",marginTop:"120px",borderRadius:'7px'}}>
                        <div className='d-flex justify-content-between '>
                            <h5 >Amount Payable</h5>
                            <h6 >Rs. {seats * 120 + seats * 25}.00</h6>

                        </div>
                        <button className='btn btn-outline-light' onClick={handleCheckout} >Checkout</button>
                        </div>
                    </div>
                </div>
                
            </div>
         
    
      
            <br></br>
            <br></br>


        </div>
    )
}

export default Cart