import React, { Component } from 'react';
import axios from 'axios';
import Brewery from 'components/Brewery/Brewery';
import './Breweries.css'

class Breweries extends Component {

  state = {
    breweries: [],
    selectedBreweryId: null,
    error: false
  }


  componentDidMount () {
    axios.get('/breweries')
      .then(response =>{
        this.setState({breweries: response.data});
      }).catch( error => {
          this.setState( { error: true } );
      } );
}

  brewerySelectedHandler = (id) => {
      this.setState({selectedBreweryId: id});
  }

  render() {

    const breweries = this.state.breweries.map( brewery =>{
      return <Brewery
        key={brewery.id}
        id={brewery.id}
        name={brewery.name}
        type={brewery.brewery_type}
        clicked={() => this.brewerySelectedHandler(brewery.id)} />
    });

    return (
      <div>
      <section className="Breweries">
        {breweries}
      </section>
      </div>
    );
  }
}

export default Breweries;
