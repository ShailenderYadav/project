import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route,Router,Link,NavLink,Switch} from "react-router-dom";

const Register =({onRouteChange})=> {
    return(
       
  <article className="br4 ba dark-gray b--red-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
         <form className="measure">
          <legend className="f1 fw6 ph0 mh0 tc">Regsiter</legend>
           <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
           <div className="mt3">
          <label className="db fw6 lh-copy f6" for="name-text">First Name</label>
            </div>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="input-text"/>
            <div className="mt3">
          <label className="db fw6 lh-copy f6" for="name-text">Last Name</label>
            </div>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="input-text"/>
            <div className="mt3">
          <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            </div>
          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            <div className="mv3">
           <label className="db fw6 lh-copy f6" for="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
           </div>
           </fieldset>
           <div className="mv3">
           <label className="db fw6 lh-copy f6" for="password">Gender</label>
           <label className="pa1 pr2 ma0 lh-copy f6 pointer"><input type="radio" name="gender"/>Male</label>
           <label className="pa1 pr2 ma0 lh-copy f6 pointer"><input type="radio" name="gender"/>Female</label>
           <label className="pa1 ma0 lh-copy f6 pointer"><input type="radio" name="gender"/>Other</label>
           </div>
           <div className="">
           <input 
           onClick={() =>onRouteChange('home')}
           className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign Up"/>
           </div>
           <div className="lh-copy mt3">
          <p onClick={() =>onRouteChange('signup')} className="f6 link dim black db pointer">Sign IN</p>
          </div>
            </form>
                 </main>
</article>
     
    );

}

export default Register;