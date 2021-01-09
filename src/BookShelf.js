import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Book from './Book';

class BookShelf extends Component {
    static propTypes = {
        booksOnShelf: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    render() {
        const { booksOnShelf, onMoveBook } = this.props;

        const shelfValues = ["currentlyReading", "wantToRead", "read"];
        const shelfNames = ["Currently Reading", "Want To Read", "Read"];

        return (
            <div>
                {shelfValues.map((shelf, index) => {
                    return (
                        <div key={index} className="list-books-content">
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shelfNames[index]}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {booksOnShelf.filter( book => book.shelf === shelf)
                                        .map( book => (
                                            <Book
                                                key = {book.id}
                                                book = {book}
                                                onMoveBook = {onMoveBook}
                                            />
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    )}
                )}
            </div>
        )
    }

}

export default BookShelf;

