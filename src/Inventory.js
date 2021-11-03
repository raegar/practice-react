import React from 'react';
import Book from './Book';
import Cd from './Cd';
import Movie from './Movie';
import './Inventory.css';


function Inventory(props) {
    return  <div className="Inventory">
                <h1>This is a collection of Items</h1>
                <Book title="Lord of the Rings" author="JRR Tolkien"/>
                <Book />
                <Cd title="Folklore" artist="Taylor Swift"/>
                <Movie title="Fellowship of the Ring" director ="Peter Jackson" format="bluray"/>
                <Movie title="Ready Player One" director ="Steven Spielberg" format="dvd"/>
                <Movie title="Black Widow" director ="Cate Shortland" format="Download"/>
            </div>
}

  export default Inventory;
