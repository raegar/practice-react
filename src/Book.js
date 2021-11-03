import React from 'react';
import './Book.css';

function Book(props) {
    return  <div className="Book-item">
                <h2>This item is a book: {props.title} by {props.author}</h2>
            </div>
  }


  Book.defaultProps = {
    title: "Untitled",
    author: "Anon"
  }
 
  export default Book;