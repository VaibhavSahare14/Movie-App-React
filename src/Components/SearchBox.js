import React from 'react'

const SearchBox = (props) => {
    return (
        <div className='searchBox'>
            <input type="text"
                value={props.value}
                onChange={(e) =>
                    props.setSearchValue(e.target.value)
                }
                placeholder="Search Movie"
            />
        </div>
    )
}

export default SearchBox