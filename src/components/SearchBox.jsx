import React from 'react'

export default function SearchBox({searchField, setSearchField}) {
    const handleInput = (e) => {
        setSearchField(e.target.value)
    }

    return (
        <div className="pa2">
            <input 
            onChange={handleInput}
            value={searchField}
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search robots"/>
        </div>
    )
}
