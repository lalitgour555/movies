import logo from './logo.svg';
import './App.css';
import Home from './Home';
//import AppBar from '@mui/material/AppBar';
import Moviecard from './Moviecard'
import Fetch from'./Fetch';
import Search from './Search';
import Footer from './Footer';
import { useState } from 'react';
// import Loder from './Loder';
function App() {
  const [category,setcategory]=useState("trending");
const changecategory = (categoryname)=>{
  setcategory(categoryname)

}

  return (

    <div className="App">
      
      <Home changecategory={changecategory}/>
      {/* <Moviecard/> */}
      
      <Fetch category={category}/>
      {/* <Loder/> */}
      <Footer/>
      {/* <Search/> */}
    </div>
  );
}

export default App;
