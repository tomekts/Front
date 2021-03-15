import { Component } from 'react';
import '../Style/Bar.css';
import Nav from 'react-bootstrap/Nav'
import{ NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../Images/Home.svg'


class Bar extends Component {
 

render(){
    return(
        <> 
        
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/"  className="d-inline p-2  kot text-white"><img src={Logo} alt='cos nie działa' ></img></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav  className='Nav'  defaultActiveKey="glowna">
  
  
  <NavLink className="d-inline p-2  kot text-white" to="/login"> Logowanie</NavLink>  
 <NavLink className="d-inline p-2  kot text-white" to="/register"> Rejestracja</NavLink> 
 <NavLink className="d-inline p-2  kot text-white" to="/contact"> Kontakt</NavLink>
 <NavLink className="d-inline p-2  kot text-white" to="/token"> Token</NavLink>
 <NavLink className="d-inline p-2  kot text-white" to="/test"> Test</NavLink>
 
</Nav>
</Navbar.Collapse>
  </Navbar>   

  
  
    </>
    )
}


}





export default Bar;