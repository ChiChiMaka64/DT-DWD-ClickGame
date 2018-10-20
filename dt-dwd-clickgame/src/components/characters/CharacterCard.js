import React from 'react';
import logo from './logo.svg';
import './components/characters/characters.css';

const character= props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.clickCharacter(props.id)} className="click">
      𝘅
    </span>
  </div>
);

export default character;
