import React from 'react'

export default function SearchBox({searchInput, onSearchChange}) {
    

    return (
        <div className="pa2">
            <input 
            onChange={onSearchChange}
            value={searchInput}
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search robots"/>
        </div>
    )
}
