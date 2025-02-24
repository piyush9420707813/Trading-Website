import React from 'react';
function Awards () {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='mt-3'> Largest stock broker in India</h1>
                    <p> 2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                    <div className='container'>
                       <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Bonds and Goverment Securies</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <img src='images/pressLogos.png' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div> 
        
     );
}

export default Awards;