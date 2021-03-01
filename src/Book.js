import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    updateBook(shelf) {
        this.props.onMoveBook(this.props.book, shelf)
    }

    render() {
        const { key, book, onMoveBook, toggleBookDetails, setCurrentBook } = this.props;
        return (
            <li key={key}>
                <div className="book card">
                    <div className="book-top">
                        <img className="book-cover" src={book.imageLinks && book.imageLinks.thumbnail} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    <div className="book-shelf-changer">
                        <p>Move to...</p>
                        <select value={book.shelf} onChange={(e) => this.updateBook(e.target.value)}>
                            <option disabled selected value> - select an option - </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">Remove from shelf</option>
                        </select>
                    </div>
                    <div className="book-shelf-changer book-details" onClick={()=>{toggleBookDetails(); setCurrentBook(book);}}>
                        <p>Details</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;