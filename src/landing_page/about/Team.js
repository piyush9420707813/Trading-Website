import React from 'react';
function Team() {
    return ( 
        <div className="container">
        <div className="row border-top">
          <h1 className="mt-5 mb-5  text-center p-5 " style={{}}>People </h1>
        </div>
        <div className="row mb-5 text-muted fs-6" style={{lineHeight:"1.8",fontSize:"1.8em"}}>
          <div className="col-6">
           <img className='mb-4' src="images\piyush.jpg" style={{borderRadius:"100%",width: "350px",height: "350px"}}/>
           <h3 className=''>Piyush Gawali</h3>
           <p >Student</p>
          </div>
          <div className="col-6 p-5">
          <p className="card-text">
                I am currently a second-year student at <strong>All India Shree Shivaji Memorial Society</strong>,  
                passionate about New technology. I am constantly exploring  
                new areas in Software and hardware integration to innovate solutions.
            </p> 
            <p>Connect On :<a className='' href='https://www.linkedin.com/in/piyush-gawali-852217316/?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAFAfPP4BUdRnMBnFWe_na9gnB4QASPJgEpM'>LinkedIn</a></p>
          </div>
        </div>
      </div>
    );
     
}

export default Team;