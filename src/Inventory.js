import React from 'react';
import Book from './Book';

function Inventory(props) {
    return <>
            <h1>This is a collection of Items</h1>
            <Book title="Lord of the Rings" author="JRR Tolkien"/>
            <Book />
        </>
  }


  export default Inventory;