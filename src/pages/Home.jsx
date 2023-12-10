import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchMovie } from '../redux/movieSlice';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Home() {
  const allMovies = useSelector((state) => state.movieSlice.allMovies)
  const dispatch = useDispatch()
  console.log(allMovies);
  


  useEffect(() => {
    dispatch(fetchMovie())
  }, [])
  return (
   <div  style={{  backgroundColor: "black",minHeight:'700px'}}>

<Carousel  className='w-100'>
      <Carousel.Item>
       <img className='w-100' src='https://assets-in.bmscdn.com/promotions/cms/creatives/1701500752835_webb.jpg'/>
        <Carousel.Caption>
          
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='w-100' src='https://assets-in.bmscdn.com/promotions/cms/creatives/1700994295451_web.jpg'/>
      
      </Carousel.Item>
      <Carousel.Item>
        
    <img  className='w-100'src='https://assets-in.bmscdn.com/promotions/cms/creatives/1701351465402_freeaccessweb.jpg'/>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <h3 className='px-5 fw-semi-bold'>Recommended Movies</h3>


 


    <div className='d-flex px-5' >

     

      {
        allMovies?.length > 0 ?
          allMovies.map((item) => (
          <Link to={`/movieview/${item.id}`}>
             

            <div class="hero-container">
            <div class="main-container">
              <div class="poster-container">
                <a href="#"><img src={item.poster} class="poster" /></a>
              </div>
              <div class="ticket-container">
                <div class="ticket__content">
                  <h4 class="ticket__movie-title text-dark">{item.name}</h4>
                  <p class="text-dark">
                   {item.language}
                   <br></br>
                   <i class="fa-solid fa-heart text-danger"></i> {item.review}/10
                  </p>
              
                </div>
              </div>
            </div>
        
           
        
            
          </div>
        
</Link>
          ))
          : <p>Nothing to Display</p>
      }
    </div>
    <div className='px-5'>
      <img className='w-100' src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png'/>
    </div>

    <div className='px-5 py-5' style={{margin:"0px"}}>

    <h3 className='px-5 fw-semi-bold'>Trending Searches Right Now</h3>
    <div className='d-flex px-5'>
 
 {
  allMovies.length>0 &&
  allMovies.map((items)=>(

    <>
     <div className="card p-2 m-3">
      <Link to={`/movieview/${items.id}`} style={{textDecoration:"none",color:"black"}}>
      {items.name}
      </Link>
  
    </div>
    </>
  ))
 }
  
    </div>
    </div>
    </div>
  )
}

export default Home