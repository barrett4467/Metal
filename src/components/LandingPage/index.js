import React, { Component } from "react";
import styled from "styled-components";
import image from "../../tree.jpg";
import PhotoCarousel from "../Carousel";
class LandingPage extends Component {
    render(){
        return (
            <div>
                <h1>Sentimetal</h1>
                <p>Your Place for all metal needs</p>
                <PhotoCarousel></PhotoCarousel>
            </div>

        )
    }
}

export default LandingPage;