import React from 'react';

import './Cockpit.css';


const cockpit = (props) => {
    const classes = [];   // ['red', 'bold'].join(' '); //"red bold"
    if (props.persons <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (props.persons <= 1) {
      classes.push('bold'); //classes = ['red', 'bold' ]
    }
    return(
        <div>
         <h1>{props.title} </h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button 
            //style={style}
            onClick = {props.clicked}>toggle person </button>
        </div>

    );

};


export default cockpit;