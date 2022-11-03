import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Row, Col } from 'react-bootstrap';
import Childish from '../data/Images/Childish.gif'
import Artists from '../data/Images/Artists.jpg'

export default function Home() {
  return (
    <>
    <div className="">
    <h1 className='lead display-5 text-center mt-1 mb-3 '>Welcome to the Genius Lyrics App </h1>
        <img src={Childish} alt='Gif animation' className=" imgHome rounded mx-auto d-block"/>
   
      
        <p className='lead p-3 mt-3 text-center'> <strong>Genius</strong> is an American digital media company founded on August 27, 2009, by 
          Tom Lehman, Ilan Zechory, and Mahbod Moghadam. The site allows users to provide 
          annotations and interpretation to song lyrics, news stories, sources, poetry, and
           documents. Originally launched as Rap Genius with a focus on hip-hop music, the company 
           attracted the attention and support of  celebrities, and venture capital  enabling further 
           growth. The site expanded in 2014 to cover other forms of media, such as pop, literature, 
           R&B, and added an annotation-embedded platform. That same year, an iPhone app was released. 
           To reflect these new goals, the site re-launched as Genius in July 2014. An Android version 
           was released in August 2015, and in 2016 and 2017, the company began producing music-focused 
           original video content and hosting live events and concerts. In December 2013, Google penalized 
           Rap Genius for violating their backlinks guidelines—particularly involvement with blog networks—by 
           removing them from its top search results. Even with the search query "rap genius", results from rapgenius.com 
           did not appear in the top results. This happened after blogger and Rap Genius contributor John Marbach exposed 
           its link scheme to manipulate Google search results by offering Tweets or Facebook shares in exchange for linking 
           to Rap Genius with keyword-rich texts.
        </p>
        <div className='container-fluid py-3'>
    <div className="d-flex justify-content-start">
      <img src={Artists} alt='Gif animation' className=' px-4  imgArt'/>
        
        <p className='p-5 lead text-center mb-5'>
        In October 2013, Rap Genius was one of fifty sites targeted with notices by the National 
        Music Publishers Association for the unlicensed online publication of song lyrics. 
        Unlike Genius, most of the sites that were targeted were ad-supported. In response, 
        Zechory stated that they "can't wait to have a conversation with them about how all 
        writers can participate in and benefit from the Rap Genius knowledge project"
         In 2014, Rap Genius entered into a licensing agreement with music publishers 
         covering both past and future publishing of music lyrics
         On July 12, 2014, reflecting its recent expansions and growth into a platform,
          Rap Genius re-launched as Genius. Genius began hosting live events at their Brooklyn 
          headquarters in 2017. On April 26, 2017, Genius hosted a listening party with rapper 
           <a href='https://en.wikipedia.org/wiki/Wale_(rapper) target="_blank" rel="noopener noreferrer"'> 
           Wale </a> for the release of Wale's album. The first Genius Level live interview was in May 
           2017, with <a href='https://en.wikipedia.org/wiki/The-Dream target="_blank" rel="noopener noreferrer"'> 
           The-Dream </a>. On September 7, 2017, Rob Markman interviewed <a href='https://en.wikipedia.org/wiki/Issa_Rae target="_blank" rel="noopener noreferrer"'> 
           Issa Rae </a> before
            a live audience.<a href='https://en.wikipedia.org/wiki/Spotify target="_blank" rel="noopener noreferrer"'> 
           Spotify </a> has had a partnership with Genius since 2016 on their "Behind 
            the Lyrics" feature, which displays lyrics and content from Genius for select tracks
            Spotify has had a partnership with Genius since 2016 on their "Behind the Lyrics"
             feature, which displays lyrics and content from Genius for select tracks
           </p>
         
        </div>
        </div>
    
      </div>
      </>
  )
}
