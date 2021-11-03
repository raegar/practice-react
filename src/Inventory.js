import React from 'react';
import Book from './Book';
import './Inventory.css';

function Inventory(props) {
    return  <div className="Inventory">
                <h1>This is a collection of Items</h1>
                <Book title="Lord of the Rings" author="JRR Tolkien"/>
                <Book />
            </div>
  }


  export default Inventory;