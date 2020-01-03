import React, { Component } from "react";
import styled from "styled-components";

const MainSection = styled.section`
    background-color: #edecee;
    border-radius: 12px;
    margin: 2px;
    padding: 10px;
    text-indent: 5px;
`

class About extends Component {

    render(){
        return (
            <MainSection>
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Habitasse platea dictumst vestibulum rhoncus est. Lectus quam id leo in vitae turpis massa sed. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Diam maecenas sed enim ut sem viverra aliquet eget. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. At auctor urna nunc id cursus. Nec tincidunt praesent semper feugiat nibh. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. At tempor commodo ullamcorper a lacus. Commodo elit at imperdiet dui accumsan.
                </p>
                <p>
                    A erat nam at lectus urna duis convallis convallis tellus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Ante metus dictum at tempor commodo ullamcorper a. Quis lectus nulla at volutpat diam ut venenatis tellus in. Tortor dignissim convallis aenean et tortor at. Gravida neque convallis a cras semper auctor neque. Ac ut consequat semper viverra nam. Pretium viverra suspendisse potenti nullam ac tortor. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Purus gravida quis blandit turpis cursus in. Placerat vestibulum lectus mauris ultrices eros. Massa vitae tortor condimentum lacinia quis vel eros donec. In massa tempor nec feugiat nisl pretium. Augue neque gravida in fermentum et sollicitudin. Imperdiet dui accumsan sit amet. Blandit libero volutpat sed cras.
                </p>
                <p>
                    Ut tortor pretium viverra suspendisse potenti. Elementum sagittis vitae et leo. Nec dui nunc mattis enim ut tellus elementum sagittis. Faucibus ornare suspendisse sed nisi lacus. Laoreet sit amet cursus sit. Aliquam sem fringilla ut morbi tincidunt augue. Odio euismod lacinia at quis risus. Dui nunc mattis enim ut tellus elementum sagittis vitae. Nec ultrices dui sapien eget mi. Dolor sit amet consectetur adipiscing elit ut aliquam.
                </p>
            </MainSection>

        )

    }
}

export default About;