import React from 'react';
import {Link} from 'react-router-dom';
import './Brewery.css'

const Brewery = (props) => (
  
  <article className="Brewery" onClick={props.clicked}>
    <span><Link className="button button--slicein" to={"/" + props.id}><h1>{props.name}</h1></Link><p className="Type">{props.type}</p></span>
  </article>
);

export default Brewery;
