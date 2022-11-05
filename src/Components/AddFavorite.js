import React from 'react'
import Heart from "./Heart.png"

const AddFavorite = () => {
    return (
        <div className='AddFavorites'>
            Add to Favorites <img id="heart" src={Heart} alt="heart" width={"24px"} />
        </div>
    )
}

export default AddFavorite