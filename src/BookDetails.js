import React, { Component } from "react";
import Book from './Book';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  handleClick = () => {
    this.props.toggleBookDetails();
  };

  render() {
      const { currentBook } = this.props;
    return (
      <div className="book-detail-window">
        <div className="book-detail-popup">
            <span className="close" onClick={this.handleClick}>&times;</span>
            <img className="book-detail-cover" src={currentBook.imageLinks && currentBook.imageLinks.thumbnail} />
            <div className="book-detail-content">
                <h2>{currentBook.title}</h2>
                <h4>{currentBook.subtitle}</h4>
                <h5>{currentBook.authors && currentBook.authors.join(', ')}</h5>
                <div><b>Publisher:</b> {currentBook.publisher}&nbsp;&nbsp;<b>Date: </b>{currentBook.publishedDate}</div><br/>
                <p>{currentBook.description}</p>
                <button name="preview-link" className="book-detail-link" href={currentBook.previewLink} role="button">View eBook</button>
            </div>
        </div>
      </div>
    )
  }
}

export default BookDetails;
