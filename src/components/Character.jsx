import React from 'react'

function Character({ character }) {
  return (
    <li className="p-5 bg-slate-800 rounded-2xl">
    <img className="rounded-xl mx-auto w-full" src={character.image} alt={character.name} />
        <p className="text-center font-bold text-slate-300 mt-4">{character.name}</p>
    </li>
  )
}

export default Character