import React, { Component } from 'react';
import './Slider.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slider1 from './sliders/slider1.jpg';
import slider2 from './sliders/slider2.jpg';
import slider3 from './sliders/slider3.jpg';
import slider4 from './sliders/slider4.jpg';
// import slider5 from './sliders/slider5.jpg';
import slider6 from './sliders/slider6.jpg';
import slider7 from './sliders/slider7.jpg';
import slider8 from './sliders/slider8.jpg';

class Sliders extends Component{
  
    render(){
        return(
        <div>
        <AliceCarousel autoPlay autoPlayInterval="1000" style={{width:'100%'}}>
            <img src={slider1} className="sliderimg"/>
            <img src={slider2} className="sliderimg"/>
            <img src={slider7} className="sliderimg"/>
            <img src={slider3} className="sliderimg"/>
            <img src={slider4} className="sliderimg"/>
            {/* <img src={slider5} className="sliderimg"/>   */}
            <img src={slider6} className="sliderimg"/>
            <img src={slider8} className="sliderimg"/>
            
        </AliceCarousel>
       
        </div>
      )
    }
   

}
export default Sliders;


