import React from "react";
import './Header.css';

class Header extends React.Component {
    render() {
        const title = "Book Recommender System";
        return(
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
    
}

export default Header;