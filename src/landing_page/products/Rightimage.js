import React from 'react';
function Rightimage({ imageURL,
    productName,
    productDesription,
    tryDemo}) {
    return ( 
        <div className='constructor mt-5'>
            <div className='row text-center'>
            <div className=' col-6 mt-5 p-5  ' style={{paddingTop:"40%"}}>
                <h1 >{productName}</h1>
                <p>{productDesription}</p>
                <a href={tryDemo}>Learn More <i class="fa fa-long-arrow-right"></i></a>
            </div>
            <div className=' col-6'>
                <img src={imageURL}></img>
                </div>
            </div>
        </div>
        
     );
}

export default Rightimage;