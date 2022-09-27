import React from 'react'

export default function Lists({search}) {
   console.log(search)
  return (
    <>
    <h1>Lists of songs</h1>
    <div>Artist Name : </div>
    <div>{search}</div>
    
    </>
  )
}
