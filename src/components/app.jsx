import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Admin from './Admin';
import Error404 from './Error404';

const mainStyles = {
  fontFamily: 'Montserrat'
};


function App(){
  return(
    <div style={mainStyles}>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/admin' component={Admin}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
