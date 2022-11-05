import React from 'react'
import Trash from "./Trash.png"

const RemoveFavorites = () => {
    return (
        <>
            <div className='RemoveFavorites'>
                Remove From Favorites <img id="trash" src={Trash} alt="trash" width={"24px"} />
            </div>
        </>
    )
}

export default RemoveFavorites;