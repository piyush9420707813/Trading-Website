import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <Leftimage
        imageURL="images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <Rightimage
         imageURL="images/console.png"
         productName="Console"
         productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
         tryDemo=""
        />
        <Leftimage
        imageURL="images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <Rightimage 
         imageURL="images/kiteconnect.png"
         productName="Kite Connect API"
         productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         tryDemo=""/>

      <Leftimage
        imageURL="images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
        <Universe/>
        </>
     );
}

export default ProductPage;