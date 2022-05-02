// import { Api } from '@mui/icons-material';
import React , {state , useEffect, useState} from 'react'
import { Button,Card , Col, Row} from 'react-bootstrap';
import Moviemodule from './Moviemodule';
import Loder from './Loder'

const trending="https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=1"
const movie="https://api.themoviedb.org/3/genre/movie/list?api_key=26ba5e77849587dbd7df199727859189&language=en-US"
const tv ="https://api.themoviedb.org/3/genre/tv/list?api_key=26ba5e77849587dbd7df199727859189&language=en-US"
const youtube= "https://api.themoviedb.org/3/movie/829557/videos?api_key=26ba5e77849587dbd7df199727859189&language=en-US"
//https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=


export default function Fetch({category}) {
  console.log(category);
  const[data ,setData]=useState([])
  const[modal,setModal]=useState(null);
  const[youtubevideo,setyoutubevideo]=useState(null);
  const[showLoder, setshowLoder]=useState(true);
  const fetchdata=(url)=>{
   fetch(url)
  .then((result)=>result.json())
    .then((resp)=>{
       setshowLoder(false);
        setData(resp.results);
        
    })
  }

  const fetchyoutube=(movieid)=>{
    fetch(youtube)
   .then((result)=>result.json())
     .then((resp)=>{
         setyoutubevideo(resp.results[0].key);
         console.log(youtubevideo);
     })
   }


  useEffect(()=>
  fetchdata(trending)
  ,[]);



  return (
    <div className='body'> 
    {showLoder ? <Loder/>  :null}
  <row> 

    { 
      data.map((item)=>{
        return(
          <>
        <Col sm={3} className=" col-md-3" onClick={()=>{
          fetchyoutube(item.id);
          setModal(item)}}>
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
        <Card.Body>
          <Card.Title>{item.title?item.title:"Title not available"}</Card.Title>
          <Card.Text>{item.release_date?item.release_date:"Date N/A"}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col> 
    
    </>
      )
      
      })
    }
    
    </row>
    
       
 
    {modal? <Moviemodule movie={modal} youtube={youtubevideo}/> : null}
      
   
    </div>
  )
}
