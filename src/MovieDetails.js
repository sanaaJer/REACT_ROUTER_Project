import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const {id}  = useParams();
  const navigate=useNavigate();
  
 const gotoHome=()=>{
  navigate('/')
 }

  return (
    <div >
      <button onClick={gotoHome}>Go Back Home</button>
    </div>
  )
}
