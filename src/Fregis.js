import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-tilt';
import { BrowserRouter as  Route,Router,Link,NavLink,Switch} from "react-router-dom";

const Fregis =({})=> {
    return (
      <div>
          <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
         <form className="measure">
          <legend className="f1 fw6 ph0 mh0 center">WHAT ARE YOU LOOKING FOR</legend><br/>
          <div>
          <label className="h4 ma0 pt5 pv7 lh-copy f6 pointer"><input type="checkbox"/> Hair Cut For @220</label><br/>
          <label className="h4 ma0 pt5 pv7 lh-copy f6 pointer"><input type="checkbox"/> Beard Trim For @100</label><br/>
          <label className="h4 ma0 pt5 pv7 lh-copy f6 pointer"><input type="checkbox"/> Shaving For @150</label><br/>
          <label className="h4 ma0 pt5 pv7 lh-copy f6 pointer"><input type="checkbox"/> Hair Cut & Trim & Shaving For @300</label>
              </div>
              
            </form>
                 </main>
</article>
          </div>
    );
}

export default Fregis;