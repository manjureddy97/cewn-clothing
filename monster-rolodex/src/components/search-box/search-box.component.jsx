import React from 'react';
import './search-box.styles.css';


export const SearchBox = ({ placeholder, handleChange}) => (
    <input 
      className='search'
      type='search'
       placeholder= {placeholder} 
    //    ocChange = {e => this.setState({ searchField:e.target.value })}
    onChange = {handleChange}
      />

)