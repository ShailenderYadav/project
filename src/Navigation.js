import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-tilt';
import './Navigation.css';
import { BrowserRouter as Route,Router,Link,NavLink,Switch} from "react-router-dom";

const Navigation =({onRouteChange})=> {

    return (
       
         <nav class="nav dt w-100 border-box pa3 ph5-ns pointer">
          
         <div class="dtc v-mid w-75 tr pt4">
         <p onClick={() =>onRouteChange('signup')} class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="SignUp">Signout</p>
         <p onClick={() =>onRouteChange('register')} class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" title="Register">Register</p>
         <p class="link dim dark-gray f6 f5-ns dib" title="About">About</p>
         </div>
          
       </nav>
       
       
    );
          
       }
       
     /* <nav style={{dislpay: 'flex', justifyContent:'flex-end',listStyleType:'none'}}>
        <ul>
					<li><a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#">SERVICES</a></li>
					<li><a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#">ABOUT</a></li>
					<li><a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#">SIGN UP</a></li>
					<li><a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#">LOGIN</a></li>
         </ul>
    </nav>*/


export default Navigation;

// <Link to ='/fregis' class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"> Service </Link>