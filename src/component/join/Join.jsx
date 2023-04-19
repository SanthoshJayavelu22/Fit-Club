import React from 'react';
import "./join.css";


const Join = () => {
 

  return (
    <div className='join'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>

        </div>

        <div className="right-j">
            <from className="email-container" >
                <input type="email" name='user_email' placeholder='Enter Your Email Address' />
                <button className='btn btn-j'>Join Now</button>
            </from>

        </div>
      
    </div>
  )
}

export default Join
