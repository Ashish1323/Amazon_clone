import React from 'react';
import Header from "./Header.js"
import Home from "./Home.js"
import Checkout from "./Checkout.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
     <Switch>
       <Router path="/checkout">
         <Checkout />
       </Router>
       <Route path="/">
       <Home />

       </Route>      
       </Switch> 
   
    </div>
</Router>
    // header
    //home
  );
}

export default App;
