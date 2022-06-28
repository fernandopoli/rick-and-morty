import React from 'react'
import CharacterList from './components/CharacterList'



function App() {
  
  
  return (
    <div className="container mx-auto px-4 min-h-screen pt-10 flex flex-col">
      <h1 className="text-4xl font-bold mb-5 text-center text-white">Rick and Morty</h1>
      
      <CharacterList/>
    </div> 
  )
}

export default App