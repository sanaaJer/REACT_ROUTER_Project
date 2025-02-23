
import {  useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Home from './Home';



const App=()=> {
 
  return(
    <div>
    
      {/* Route components are rendered if the path prop matches the current URL   */}
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies/:id' element={<MovieDetails />}></Route>
      </Routes>
    </div>
  );

}


export default App;
