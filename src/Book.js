import React from 'react';

function Book(props) {
    return <h2>This item is a book: {props.title} by {props.author}</h2>;
  }

  export default Book;