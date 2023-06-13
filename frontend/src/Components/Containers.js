import React from 'react';
import Buttons from './Buttons';
import Details from './Details';
import '../App.css';

export default function Container() {
    return (
        <div className='container'>
          <Buttons />
          <Details />
        </div>
      );
}
