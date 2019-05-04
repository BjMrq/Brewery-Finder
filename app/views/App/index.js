import React from 'react';

import { Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Breweries from '../../containers/Breweries/Breweries';
import DetailedBrewery from '../../components/DetailedBrewery/DetailedBrewery';
import BrewerySearch from '../../containers/BrewerySearch/BrewerySearch';

export default class App extends React.Component {
    render() {
        return (
        <div>
            <Route path="/" component={Header} />
            <Route path="/" exact component={Breweries} />
            <Route path="/Search/Brewery" component={BrewerySearch} />
            <Route path="/:id" exact component={DetailedBrewery} />
        </div>
        );
    }
}
