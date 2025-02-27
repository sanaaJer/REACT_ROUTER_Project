import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import movies from './movies';

export default function MovieDetails() {
  const {id}  = useParams();
  const navigate=useNavigate();
  const movieClicked=movies.find((e)=>e.id===Number(id))
  

// handle go home click
 const gotoHome=()=>{
  navigate('/')
 }

  return (
    <div className='sectionDetails' >
     
     <button className='backhome' onClick={gotoHome}><i className="bi bi-arrow-left"></i>Back Home</button>
     <h2 id='titleH'>{movieClicked.title}</h2>
     <p id='descriptParag'>{movieClicked.description}</p>
     <div>
     <iframe width="560" height="315" 
          src={movieClicked.trailerURL}
          frameborder="0" allowfullscreen>
      </iframe>
     </div>
     
    </div>

  )
}
