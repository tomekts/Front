import './Style/App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Pages/Contact.js';
import Login from './Pages/Login.js';
import Home from './Pages/Home.js';
import Register from './Pages/Register.js';
import Token from './Pages/Token.js';
import Test from './Pages/Test.js';

import Bar from './Pages/Bar.js';



class App extends Component {
  
  render(){
    return(
      
      <>     
         
        <Router>     
        <Bar /> 
        
          <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/token" component={Token}/>
            <Route path="/test" component={Test}/>
          </Switch>
      
        </Router>
        
      </>
    )     
  }
}

export default App;
