import React, { Component } from 'react';

class NavBar extends Component {

    render(){
        return (
            <>
                <div>
                    <a href="/">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/projects">Projects</a>
                </div>
            </>
        )
    }
}

export default NavBar;