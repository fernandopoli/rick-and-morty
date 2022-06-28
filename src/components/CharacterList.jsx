import React, { useState, useEffect } from 'react'
import Character from './Character'
import Paginator from './Paginator'

function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
  useEffect(() => {
    async function fechtData() { 
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      setCharacters(data.results)
      setLoading(false)
    }
    fechtData()
  }, [page])
    
if (loading) { 
    return (
        <div className="flex justify-center items-center w-full h-full text-3xl flex-grow text-white">Loading</div>
    )
}
    
  return (
        <div>
            <Paginator page={page} setPage={setPage} />
     <ul className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {characters.map(character => (
          <Character  key={character.id} character={character} />
        ))}
      </ul>  
      <Paginator page={page} setPage={setPage} />
      </div> 
  )
}

export default CharacterList