import React,{useState, useEffect} from 'react'
import Lists from './Lists'

export default function Search() {
    const [search, setSearch] = useState('');
    const [artistsData , setArtistsData] = useState(null)
    const [error, setError] = useState(null)
  

    useEffect(()=>{ 
      
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c91384c642mshaa6c8ff4bb3387cp1b6b4fjsnd6fee11c99cc',
          'X-RapidAPI-Host': 'genius.p.rapidapi.com'
        }
      };
  
      fetch(`https://genius.p.rapidapi.com/search?q=${search}`
      , options)
        .then(response => {
          if(!response.ok){
            throw Error('Could not Fetch')
          }
          return response.json()  
        })
        .then(data =>{
          // console.log(data.response.hits)
          setArtistsData(data.response.hits)
        })
        .catch(err => {setError(err.message) })
        
        // .catch(err => console.error(err));
    }, [search])
   



  function handleSubmit(event){
    event.preventDefault();
   

  }

  function handleOnChange(event){
    setSearch(event.target.value)
      console.log(event.target.value)

  }

  return (
    <>
    {error && <div>{error}</div>}
     <div>
       <form onSubmit={handleSubmit}>
        <label>Search </label>
         <input
         value={search}
         onChange={handleOnChange}
         name="search"
         placeholder="Search for an Artist"
         />
      <button >Submit </button>
       </form>
       <Lists search={search}/>
<div>
  {artistsData && (artistsData.map((artist, key ) => {
    return  <ol key={artist.result.id}>
     <div className='column'>
        <div className='card'>
            <div className='container-card'>
              <h1 className='card-title'> 
                <li >
                {artist.result.full_title} 
                </li>
              </h1>
                <img
                className ='artists_img'
                src={artist.result.song_art_image_url} 
                alt={artist.result.artist_names}
                />
  <br/> 
      <div >
        <p className='artist_date-display'>
          Release date : 
          { artist.result.release_date_for_display}
        </p>
        <a href={artist.result.url}
          target='_blank'
          rel="noopener noreferrer">
          <button style={{color: 'brown'}}>
            Lyrics
          </button>
        </a>
      </div>
    </div>
   </div>
  </div>
              </ol>
})
  )
       }
        </div>
     </div>
    </>
  )
}
