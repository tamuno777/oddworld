import React from 'react'
import { Link, useLocation } from "react-router-dom";


export default function Navbutton(props) {
  const location = useLocation();
  const allstate = {
    day: 'ALL-DAY',
    tota: '2500',
    da: '1618',
    code: '372',
  };

  const isActive = location.pathname === props.to;

  return (
    <Link to={props.to} style={{textDecoration:"none"}} state={allstate}  >
        <div >
               
            <p className='btnClass px-4 text-white text-center'  style={{textDecoration:'none',color:'dark',border:'none',alignItems:"center"}}>          
                <strong>{props.title}</strong>
            
            </p>

        </div>
    </Link>
  )
}

