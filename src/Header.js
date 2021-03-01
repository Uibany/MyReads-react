import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from './pictures/background.jpeg';

class Header extends Component{

    render(){
        return(
            <div className = "header-container">
                <img src = {background} alt = "background" className = "header-image"/>
                <h1 className = "header-title">MyReads</h1>
                <p className = "header-quote">“That’s the thing about books. They let you travel without moving your feet.”<br/>
                <i>– Jhumpa Lahiri</i></p>
                
                <Link to="/search" className = "header-button">EXPLORE BOOKS</Link>
            </div>
        )
    }
}
export default Header;