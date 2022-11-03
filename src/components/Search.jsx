import React,{useState, useEffect} from 'react'
import Lists from './Lists'
import tape from '../data/Images/mixTap.jpg'
import { Button, Table,Form} from 'react-bootstrap';

export default function Search() {
    const [search, setSearch] = useState('');
    const [artistsData , setArtistsData] = useState([])
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
          console.log(response)
          if(!response.ok){
            throw Error('Could not Fetch')
          }
          return response.json()  
        })
        .then(data =>{
          console.log(data.response)
          setArtistsData(data.response.hits)
        })
        .catch(err => {setError(err.message) })
   
    }, [search])
   



  function handleSubmit(event){
    event.preventDefault();
    console.log('sub')
   

  }

  function handleOnChange(event){
    setSearch(event.target.value)
      console.log(event.target.value)

  }

  return (
    <>
    {error && <div>{error}</div>}
     <div>
       
     <blockquote className="blockquote mb-0 text-center mt-3 mb-3 lead">
          <p>
            {' '}
           One thing about music when it hit you, you feel no pain .{' '}
          </p>
          <footer className="blockquote-footer justify text-contend-end">
            Bob Marley 
          </footer>
        </blockquote>
    <img src={tape} alt='Gif disc' className='disc rounded mx-auto d-block'/>

   

      

<Form 
 onSubmit={handleSubmit}
 className="d-flex text-center m-5 form">
            <Form.Control
            size="lg"
             placeholder='Enter Artist Name'
             value={search}
             onChange={handleOnChange}
              type="search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>


      
     
       <Lists search={search}/>
       <div className='container-fluid py-3'>
    <div className="row justify-content-center">
    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
<Table striped bordered hover variant="dark">
  <thead>
  {artistsData && (artistsData.map((artist, key ) => {
    return  <tr className="align-middle" key={artist.result.id}>
        
            <div className='d-flex justify-content-between '>
             
              <td>
            <img
                className ='img-cart img-fluid '
                src={artist.result.song_art_image_url} 
                alt={artist.result.artist_names}
                />
                </td>
                <td>
              <h1 className='lead text-center '> 
                {artist.result.full_title} 
              </h1>
              </td>
                <td>
                <p className='artist_date-display lead text-muted '>
                    Release date : 
                   { artist.result.release_date_for_display}
                </p> 
                </td>
                <td>
            <div className='d-flex justify-content-end py-3'>     
          <Button 
          href={artist.result.url}
          target='_blank'
          rel="noopener noreferrer"
          variant="outline-light ms-5">
            Lyrics
          </Button>
          </div>
          </td>    
      </div>
      
   </tr>

             
              
})
  )
       }
       </thead>
        </Table>
        </div>
        </div>
        </div>
     </div>
     
    </>
  )
}
