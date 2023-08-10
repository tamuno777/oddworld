import React from 'react'
import Navbutton from './Navbutton';
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navs() {
    
  return (
    <>
      
        <Navbar  className=" text-white nav-container w-100 " >
          <Container fluid className='d-flex cont'> 
           
             
            
              <div className='odd'  > <h1 className=' pt-0  '><strong>ODD WORLD</strong></h1></div>

                <Nav className="justify-content-center d-flex flex-grow-1 fs-5  nav-content  ">

                  <div className='link me-1'  ><Navbutton title="Home" to="/Home" /></div>
                  {/* <a href="/Slack" ></a> */}
                  <div className='link mx-1'  ><Navbutton title="Events" to="/Events" /></div>
                  <div className='link '  ><Navbutton title="Tickets" to="/Tickets" /></div>

                </Nav>

                  
            
          </Container>
        </Navbar>
    
    </>
  );
}

export default Navs;


