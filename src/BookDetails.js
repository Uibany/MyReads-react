import React, { Component } from "react";
import PropTypes from 'prop-types';

class BookDetails extends Component {
    static propTypes = {
        currentBook: PropTypes.object.isRequired,
        toggleBookDetails: PropTypes.func.isRequired
    }

    handleClick = () => {
        this.props.toggleBookDetails();
    };

  render() {
    const { currentBook } = this.props;

    return (
      <div className="book-detail-window">
        <div className="book-detail-popup">
            <span className="close" onClick={this.handleClick}>&times;</span>
            <img className="book-detail-cover" src={currentBook.imageLinks && currentBook.imageLinks.thumbnail} alt = "book cover" />
            <div className="book-detail-content">
                <h2>{currentBook.title}</h2>
                <h4>{currentBook.subtitle}</h4>
                <h5>{currentBook.authors && currentBook.authors.join(', ')}</h5>
                <div><b>Publisher:</b> {currentBook.publisher}&nbsp;&nbsp;<b>Date: </b>{currentBook.publishedDate}</div><br/>
                <p>{currentBook.description}</p>
                <a href={currentBook.previewLink}  className="book-detail-link">View eBook</a>
            </div>
        </div>
      </div>
    )
  }
}

export default BookDetails;
