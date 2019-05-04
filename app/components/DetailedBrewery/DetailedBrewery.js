import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './DetailedBrewery.css'

export default class DetailedBrewery extends React.Component {

  state={
    loadedBrewery: null,
    error: false
  }

  componentDidMount(){
    axios.get('/breweries/' + this.props.match.params.id)
      .then(response =>{
        this.setState({loadedBrewery: response.data});
      }).catch( error => {
            this.setState( { error: true } );
        } );
      }

    render() {

      let brewery = <p style={{ textAlign: 'center' }}>Please select a brewery from home page!</p>
      if ( this.props.match.params.id ) {
        brewery = <p style={{ textAlign: 'center' }}>Loading...!</p>;
      }
      if ( this.state.loadedBrewery ) {
        brewery =
        <div className="DetailedBrewery">
          <h1>{this.state.loadedBrewery.name}</h1>
          <h4>Brewery type: {this.state.loadedBrewery.brewery_type}</h4>
          <h4>Contact:</h4>
          <p>Phone: {this.state.loadedBrewery.phone}</p>
          <a className="CTA" href={'tel:' + this.state.loadedBrewery.phone}>Give them a call</a>
          <br/>
          <p>Address: {this.state.loadedBrewery.street}, {this.state.loadedBrewery.city}, {this.state.loadedBrewery.state}</p>
          <a className='CTA' href={'https://www.google.com/maps/search/?api=1&query=' + this.state.loadedBrewery.street + this.state.loadedBrewery.city + this.state.loadedBrewery.state} target="_blank">Get direction</a>
        </div>
      }
      return brewery
    }
}
