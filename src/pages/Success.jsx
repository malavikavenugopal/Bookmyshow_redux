import React from 'react'

function Success() {
  return (
    <div style={{backgroundColor:"black",minHeight:"580px"}}>

        
      <div className='d-flex justify-content-center align-items-center flex-column ' style={{minHeight:"500px"}} >
       <img height={200} src='https://cdn1.iconfinder.com/data/icons/web-interface-part-2/32/circle-checkmark-512.png'/>
      
        <h1>Success</h1> 
        <p style={{textAlign:"center"}}>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
     
    </div>
  )
}

export default Success