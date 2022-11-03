import React from 'react'

export default function Lists({search}) {
   console.log(search)
  return (
    <>
   
    <h2
    className="lead text-center display-5 my-5">
      <u>
      Lists of songs
      </u>
      </h2>
      
    <div 
    className='lead display-6 text-center '>
      Artist: 
    <span className='lead display-6 m-2'>
      {search}
      </span>
    </div>
    
    
    </>
  )
}
