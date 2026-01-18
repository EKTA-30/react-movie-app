import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
      <div>
        <img src="../../public/assets/search.svg" alt="" />
        <input
        type='text'
        value={searchTerm}
        placeholder='Search through thousands of movies'
        onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Search