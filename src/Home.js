import React from 'react'
import moviesFile from './movies';
import {  useState } from 'react';
import Filter from './Filter';


export default function Home() {
  // movies list data
  const [movies,setMovies]=useState(moviesFile)
  // Create refs for input's form
  const [newMovie,setNewMovie]=useState({
   title:'',
   description:'',
   posterURL:'',
   rating:''
  });
  
 
 
  //handle submit Add movie form 
  const addMovieSubmit=(e)=>{
    e.preventDefault()
    setMovies((prevstate)=>[...prevstate,newMovie])
    //clear newMovie state values
    setNewMovie({
     title:'',
     description:'',
     posterURL:'',
     rating:''
    })
  };
  return (
    <div >
      {/* filter component */}
      <Filter movies={movies}/>
      {/* form Add new movie  */}
      <div  className="formSection">
        <h1>Add new Movie</h1>
        <form  onSubmit={addMovieSubmit} >
          <label>Title</label>
          {/* // todo : */}
          <input value={newMovie.title} name='title' onChange={(e)=>{setNewMovie({...newMovie,title:e.target.value})}} type='text' placeholder='Enter title' required/>
          <label>Description</label>
          <input value={newMovie.description} name='description'onChange={(e)=>{setNewMovie({...newMovie,description:e.target.value})}} type='text' placeholder='Enter description' required/>
          <label>Image URL</label>
          <input value={newMovie.posterURL} onChange={(e)=>{setNewMovie({...newMovie,posterURL:e.target.value})}} type='url' placeholder='Enter a valid URL' required/>
          <label>Rate</label>
          <input value={newMovie.rating} onChange={(e)=>{setNewMovie({...newMovie,rating:parseFloat(e.target.value)})}}  type='number' placeholder='Enter number Rate' required/>
          <input type='submit'  value='Add movie'></input>
        </form>
      </div>
    </div>
  )
}
