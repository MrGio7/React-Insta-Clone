import React from 'react';

import './SearchBar.css'

const SearchBar = () =>{
    return(
        <div className='search-bar'>
            <div>
                <div className='logo1'></div>

                <div className='split'></div>

                <div className='logo2'></div>
            </div>
                <div className='search'> <form> <input type="text" autoCapitalize="none" placeholder = "Search"></input> </form> </div>
            <div className="logo-container">
                <div className='logo3'></div>

                <div className='logo4'></div>

                <div className='logo5'></div>
            </div> 
        </div>
    )
}

export default SearchBar;