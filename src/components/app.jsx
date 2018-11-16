import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import BeerList from './BeerList';
import Admin from './Admin';
import Error404 from './Error404';

const mainStyles = {
  fontFamily: 'Montserrat'
};




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          beerName: 'Ruby Zozzle',
          brand: 'Hi-Wheel',
          color: '#FF8C15',
          abv: 6.8,
          price: 7,
          status: 20
        },
        {
          beerName: 'Tart N Juicy',
          brand: 'Epic',
          color: '#44110E',
          abv: 4.5,
          price: 6,
          status: 60
        },
        {
          beerName: 'Hamm\'s',
          brand: 'Miller/Coors',
          color: '#FF8C15',
          abv: 4.7,
          price: 3,
          status: 65
        },
        {
          beerName: 'Prismatic',
          brand: 'Ninkasi',
          color: '#F2B749',
          abv:  5.9,
          price: 6,
          status: 75
        },
        {
          beerName: 'Juicy Haze',
          brand: 'New Belgium',
          color: '#F2B749',
          abv:  7.5,
          price: 6,
          status: 18
        },
        {
          beerName: '8 Hop',
          brand: 'New Belgium',
          color: '#44110E',
          abv:  5.5,
          price: 6,
          status: 58
        }
      ]
    };
  }

  render(){
    return(
      <div style={mainStyles}>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BeerList masterKegList={this.state.masterKegList}
            editKegStatus='false'
          />} />
          <Route path='/Admin' render={()=><Admin masterKegList={this.state.masterKegList}
          />} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }  
}


export default App;
