import React,{useState, useEffect} from 'react'

export default function FavoritesSongs() {
  const [favs, setFavs] = useState('')
  const [favsData, setFavsData] = useState(null)

  useEffect(() =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c91384c642mshaa6c8ff4bb3387cp1b6b4fjsnd6fee11c99cc',
        'X-RapidAPI-Host': 'genius.p.rapidapi.com'
      }
    };
    
    fetch(`https://genius.p.rapidapi.com/search?q=${favs}`, options)
      .then(response => {
       return response.json()
      } )
      .then(data => {  console.log(data.response.hits)
        setFavsData(data.response.hits)
       
      })
      // .catch(err => console.error(err));
  },[favs]);


 

  const handleFavsChange = (e)=>{
    e.preventDefault()
    setFavs(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmitFavs = (e) =>{
    e.preventDefault()
  }

 

  return (
    <>
     <h3>
      Favorites Albums
     </h3>
     <div>
       <form onSubmit={handleSubmitFavs}>
        <label> Save your favs:  </label>
         <input
         onChange={handleFavsChange}
         value={favs}
         textarea='Enter your fav artist name..'/>
         <button >Enter </button>
       </form>
     </div>
     <div>
       <h4> Listing</h4>
    </div>  
{favsData && favsData.map((favorite, key) => {
  return <li key={favorite.result.id}>

   <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <h2>{favorite.result.artist_names}</h2>
      <img src={favorite.result.song_art_image_url} 
      alt={favorite.result.artist_names} 
      />
    </div>
    <ol>

    
    </ol>
    <div className="flip-card-back">
      <h1>{favorite.result.full_title}</h1> 
      <p>{ favorite.result.release_date_for_display}</p> 
      
    </div>
  </div>
</div>
{/* <button onClick={handleDelete}> delete </button> */}

{}
  </li>
})}

    

    
  
    </>
  )
}
