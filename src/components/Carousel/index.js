import React, {Component} from "react"; 
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


class PhotoCarousel extends Component {
    render(){
        return(
            <Carousel>
                <div>
                    <img src="https://via.placeholder.com/150" alt="image 1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/150" alt="image 1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/150" alt="image 1"/>
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        )
    }
}

export default PhotoCarousel;