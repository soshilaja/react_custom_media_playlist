import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddLinks from './Components/AddLinks/AddLinks';
import React from 'react';




function App() {
  
  

  // const handleLink = () => {
  // // event.preventDefault();
  // // const playLink =event.target.attributes.value.value;
  // setPlayLink({data: playLink});
  // // console.log(playLink);
  // alert('click');
  // }
  
  
  return (
    <BrowserRouter>
    <div className="app">
        <Navbar />
        <Home heading={"My Custom Playlist"} />
        <AddLinks />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
