import Tilt from 'react-tilt';
import React,{Component} from 'react';
import servic from './servic.png';
import salon from './salon.jpg';
import './Fmodule.css';
import Fregis from './Fregis';
import { Link} from "react-router-dom";
import { BrowserRouter as Route,Router,NavLink,Switch} from "react-router-dom";

const Fmodule =({})=> {
    return (
    
        <Tilt className='form Tilt br3 shadow-1 w-20 ma6 mv6 pointer'style={{height: 290 ,width: 430}}>
       <div className='pt3'> 
       <br />
                <p className='pt7'>{'Hair Salon At Home'}</p>
                <p className="f6 link dim black db pointer">Go</p>
                
       </div>
       </Tilt>
       
    

      
    );
}

export default Fmodule;
//<div className= 'form br3 shadow-3 pa4 pt6'>
//<Link to="/fregis">Go</Link>