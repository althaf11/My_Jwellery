import React from 'react'
import NavBar from '../src/Components/NavBar';
import Carousel from './Components/Carosol';
import ExploreSection from './Components/ExploreSection';
// import CardSection from './Components/CardSection';
import WhyChooseUs from './Components/WhyChoose';
import Footer from './Components/Footer';
// import CardItems from './Components/CardItems';
import CardSection from './Components/CardSection';
import LatestProducts from './Components/LatestProducts';
// import BangleCards from './Components/BangleCards'
// import CardModel from './Components/CardModel';
// import WholeCards from './Components/WholeCards';

const Layout = () => {
  const images = [
    '../src/assets/Carosal/image1.png',
    '../src/assets/Carosal/image2.png',
    '../src/assets/Carosal/image3.png'
  ];
  return (
    <div>
      
     
        <NavBar/>
        <br />
        <Carousel items={images}/>
        <ExploreSection/>
        {/* <CardModel/> */}
        {/* <WholeCards/> */}
        {/* <CardItems/> */}
        <CardSection/>
        <LatestProducts/>
        <WhyChooseUs/>
        <Footer/>
       
       
    </div>
  )
}

export default Layout