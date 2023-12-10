import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/esm/Container';

function MovieView() {
  const { id } = useParams()
  console.log(id);
  const { allMovies } = useSelector((state) => state.movieSlice)
  console.log(allMovies);

  const movie = allMovies.find((item) => item.id == id)
  console.log(movie);

  return (
    <div style={{ backgroundColor: "black" }} className='d-flex justify-content-center flex-column'>




      <div  style={{ position: "relative" }}>
        <img className='px-5 w-100'   height='500' src={movie.cover} />
        <div style={{ position: "absolute", marginTop: "-455px", marginLeft: "50px" }} >
          <div className="row px-2">

            <div className="col-lg-11 d-flex justify-content-center movie_header text-light ">

              <div >
                <img src={movie.poster} />
              </div>
              <div className='py-4 d-flex justify-content-center gradient  flex-column'>
                <div className='px-2'>
                <h1>{movie.name}</h1>
              <h4><i class="fa-solid fa-heart text-danger"></i> {movie.review}/10</h4>
              <button className='btn  btn-dark' style={{ width: "100px" }}>{movie.duration}</button>
              <p class="type">{movie.language}</p>

              <h6>{movie.about}</h6>

              <Link to={`/theater/${id}`}>
                <button style={{ width: "250px" }} className='btn btn-outline-dark text-light btn-lg'>Book Tickets</button>
              </Link>
                </div>
              
              </div>
              









            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Container>
        <h3>Cast</h3>
        <div className="d-flex">

          {movie.cast.map((item) => (
            <>
              <div style={{ width: "160px", margin: "10px" }}>
                <img style={{width:"160px"}} className='rounded-circle' src={item.img} />
                <p style={{ textAlign: "center" }}>{item.name}</p>
              </div>
            </>
          ))}

        </div>

        <h3>Crew</h3>
        <div className="d-flex" style={{margin:"20px"}}>

          {movie.crew.map((item) => (
            <>
              <div style={{ width: "160px", margin: "10px" }}>
                <img style={{width:"160px"}}  className='rounded-circle' src={item.img} />
                <p style={{ textAlign: "center" }}>{item.name}</p>
              </div>
            </>
          ))}

        </div>



      </Container>
    </div>
  )
}

export default MovieView