import React from 'react';
import './Cd.css';

function Cd(props) {
    return  <div className="Cd-item">
                <h2>This item is a CD: {props.title} by {props.artist}</h2>
            </div>
  }


  Cd.defaultProps = {
    title: "Untitled",
    author: "Anon"
  }
 
  export default Cd;