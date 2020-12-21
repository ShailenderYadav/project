import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Register from './Register';
import Signup from './Signup';
import Navigation from './Navigation';
import LoGo from './LoGo';
import Fmodule from './Fmodule';
import { Component } from 'react';
import Fregis from './Fregis';
import { BrowserRouter as Route,Router,Link,NavLink,Switch} from "react-router-dom";

const particlesOptions = {
  particles: {
    number :{
      value :30,
      density:{
        enable : true,
        value_area : 800
      }
    }
  }
}

class App extends Component {
  constructor() {
      super();
       this.state={
         route:'signup'
       }
  }

  onRouteChange= (route) =>{
     this.setState({route: route});

  }
  render(){
  return (
    
    <div className="App">

      {this.state.route==='home'
        ? <div>
      <Navigation onRouteChange={this.onRouteChange}/>
      <LoGo />
      <Fmodule />
      <Fregis />
 
       </div>
      :(this.state.route ==='signup'
       ?
      <Signup onRouteChange={this.onRouteChange} />
      :
      <Register onRouteChange={this.onRouteChange} />
      )

      }
    </div>  
  );
}
}
export default App;
//<Route exact path="/fregis" Component={Fregis}/>
/*{this.state.route==='home'
? <div>
<Navigation onRouteChange={this.onRouteChange}/>
<LoGo />
<Fmodule onRouteChange={this.onRouteChange}/>
 
</div>
:(this.state.route ==='signup'
 ?
 <Signup onRouteChange={this.onRouteChange} />
 :
 <Register onRouteChange={this.onRouteChange} />
)
}*/

/*
<Router>
<Switch>
<Route exact path="/" Component={Fregis}/>
<Route   Component={Register}/>
<Route   Component={Navigation}/>
<Route   Component={Fmodule}/>
<Route   Component={Signup}/>
  </Switch>
</Router>
*/