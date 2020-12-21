import Tilt from 'react-tilt';
import React,{Component} from 'react';
import servic from './servic.png';
import './Logo.css';
import { BrowserRouter as Route,Router,Link,NavLink,Switch} from "react-router-dom";

const LoGo =()=> {
    return (
     <div className= 'ma4 mt0 '>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 135, width: 135 }} >
          <div className="Tilt-inner pa4">
               <img style={{paddingTop: '5px'}}alt='logo' src={servic}/> </div>
         </Tilt>
     </div>
    );
}

export default LoGo;