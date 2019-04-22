import React from 'react';

import './SearchBar.css'

const SearchBar = (props) =>{
    return(
        <div className='search-bar'>
            <div>
                <div className='logo1' />

                <div className='split' />

                <div className='logo2' />
            </div>

                <div className='search'> 
                    <form> 
                        <input 
                          type="text" 
                          placeholder = "Search" 
                          onChange={props.search} 
                        /> 
                    </form> 
                
                </div>

            <div className="logo-container">

                <div className='logo3' />

                <div className='logo4' />

                <div className='logo5' />
            </div> 
        </div>
    )
}

export default SearchBar;