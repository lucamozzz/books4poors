import React from 'react'

const Searchbar = () => {
    return (
        <>
            <form action="">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for books..."
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default Searchbar;