import React from 'react';
import '../App.css';
import{Jumbotron} from 'react-bootstrap'
const MyJumbotron=(props)=>{


    return(

        <div>
            <Jumbotron className=' text-white bg'>
  <h1 > Welcome to my {props.title} store!</h1>
  <h2 className='tracking-in-expand'>
   
    <br/>
        {props.tagline}
  </h2>
  
</Jumbotron>
        </div>
    )
}

export default MyJumbotron;