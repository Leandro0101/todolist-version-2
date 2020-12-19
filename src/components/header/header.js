import React from 'react';
import './header.css'
import image5 from '../../images/image5.jpeg'
const Header = () => {
    return (
        <div className="header">
            <p>Leandro Lima</p>
            <img src={image5} />
        </div>
    )
}

export default Header;