import React from 'react';
import './Navbar.css';

function Navbar(props) {
    return (
        <nav className='navbar'>
        <h2>Personal Media Playlist</h2>
        <div className='links'>
            <a id="link" className='headlink' href='/home'>Home</a>
            <a id="link" className='headlink' href='/playerview'>Video</a>
        </div>
        </nav>
    );
}

export default Navbar;