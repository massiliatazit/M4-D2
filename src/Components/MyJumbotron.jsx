import React from 'react';
import '../App.css';
import{Jumbotron} from 'react-bootstrap'
const MyJumbotron=(props)=>{


    return(

        <div>
            <Jumbotron className=' text-white bg'>
  <h1> Welcome to my {props.title} store! world!</h1>
  <h6>
   
    <br/>
        {props.tagline}
  </h6>
  
</Jumbotron>
        </div>
    )
}

export default MyJumbotron;