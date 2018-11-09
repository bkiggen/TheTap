import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import AddBeer from './AddBeer';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route path='/add' component={AddBeer}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  )
}

export default App;
