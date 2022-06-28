import React from 'react'

function Paginator(props) {

    
  return (
    <header className="flex gap-4 justify-center items-center my-10 text-white">        
        { props.page > 1 ? 
            <button className="bg-white py-2 px-6 rounded-full text-slate-700 font-black" onClick={() => props.setPage(props.page - 1)}>Page {props.page - 1}</button>    
            :  
            null
        }
        <p>Page: {props.page}</p>
        <button className="bg-white py-2 px-6 rounded-full text-slate-700 font-black" onClick={() => props.setPage(props.page + 1)}>Page {props.page + 1}</button>                     
    </header>
  )
}

export default Paginator