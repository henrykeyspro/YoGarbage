import React, { Component } from 'react';
import gar from '../Assets/gar.jpg'
import slider1 from './sliders/slider1.jpg'
// import SimpleImageSlider from "react-simple-image-slider";
import '../Home/Home.css'

class Home extends Component{
    render(){
        return(
            <div>
              <img src={slider1} alt='slider' className='slide' />
                <div className='bod'>
                <h1> Garbage collection App
                    </h1>     
                <p>
                    Yo-Garbage is a tech management company that provides waste eliminations 
                    thus smart city solutions to businesses and communities. <br/>
                        Garbage collection app allows individual , households and small businesses 
                    to manage waste collection <br/> services from a hand smart phone.<br/> Request for 
                    on-demand services , regular collection , extra pickups , rate collections
                    of all in one olace at the same time.
                </p>
                <br />
                <strong>
                <h2>
                    Why Yo-Garbage?
                </h2>
                </strong>
                <p>
                    To solve the problems and burdens of garbage. <br />
                    To make the city A better place for every one.<br />
                    Conviniency anytime  anywhere from your handy device you can schedule or request for a collection service .<br/>
                </p>
                </div>
            </div>
        )
    }
}
export default Home;