// import { Home } from "@mui/icons-material";
import { Category } from '@mui/icons-material';
import {React , filterResult} from 'react'
import { Nav } from 'react-bootstrap';
import './Home.css'

 function Home  ({changecategory}) {


  return (
    
    <div><Nav
  activeKey="/home"
  onSelect={(selectedKey) =>{changecategory(selectedKey);    alert(`selected ${selectedKey}`)}}
>
  <Nav.Item>
    <Nav.Link eventKey="trending">Trending</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="movie">Movies</Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
    <Nav.Link eventKey="link-2">Bollywood</Nav.Link>
  </Nav.Item> */}
  <Nav.Item>
    <Nav.Link eventKey="tv">Series</Nav.Link>
  </Nav.Item>
  {/* <Nav.Item>
    <Nav.Link eventKey="link-4">Episode</Nav.Link>
  </Nav.Item> */}
  <Nav.Item>
  <div class="searchBox">

<input class="searchInput"type="text" name="" placeholder="Search"/>
<button onClick={()=>filterResult} class="searchButton"  href="#">
    <i class="material-icons">
        search
    </i>
</button>
</div>
    
  </Nav.Item>
</Nav></div>
  )
}

export default Home;
 