import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center mt-5 p-5 mb-5 border-bottom'>
            <h1>Technology</h1>
            <h3 className='text-muted'>Sleek, modern, and intuitive trading platforms</h3>
            <p>Check out our <a href='/'style={{textDecoration:"none"}}> investment offerings →</a></p>
        </div>
     );
}

export default Hero;