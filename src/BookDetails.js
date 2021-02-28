import React, { Component } from "react";
import Book from './Book';
import PropTypes from 'prop-types';

class BookDetails extends Component {
  handleClick = () => {
    this.props.toggleBookDetails();
  };

  render() {
    return (
      <div className="book-detail-window">
        <div className="book-detail-content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>

            <h3>Book details!</h3>

        </div>
      </div>
    )
  }
}

export default BookDetails;
