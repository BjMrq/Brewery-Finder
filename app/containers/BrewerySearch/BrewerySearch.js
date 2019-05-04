import React, { Component } from 'react'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import Autosuggest from 'react-autosuggest'
import Brewery from '../../components/BreweryFound/BreweryFound';
import './BrewerySearch.css'

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST || "https://api.openbrewerydb.org"

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div className="text-lg p-4">
    {suggestion.name}
  </div>
);

class BrewerySearch extends Component {
  constructor() {
    super();

    this.debouncedGetSuggestions = debounce(500, this.getSuggestions)

    this.state = {
      value: '',
      brewery: {},
      suggestions: []
    }
  }

  getSuggestions = value => {
    const params = { query: value }

    axios.get(`${API_SERVER_HOST}/breweries/autocomplete`, { params: params })
      .then(res => {
        this.setState({ suggestions: res.data })
      })
      .catch(error => {
        this.setState({ suggestions: [] })
      })
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedGetSuggestions(value)
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (_event, { suggestion }) => {
    const brewery = suggestion

    axios.get(`${API_SERVER_HOST}/breweries/${brewery.id}`)
      .then(res => {
        this.setState({ brewery: res.data })
      })
      .catch(error => {})
  }

  render() {
    const { brewery, suggestions, value } = this.state

    const inputProps = {
      placeholder: 'Type a brewery name',
      value,
      onChange: this.onChange,
      className: 'Search'
    };

    return (
      <div className="container">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
        <Brewery brewery={brewery} />
      </div>
    )
  }
}

export default BrewerySearch
