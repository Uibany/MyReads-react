import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import background from './pictures/background.jpeg';
import Book from './Book';

class Search extends Component{
    render(){
        const { allBooks } = this.props;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {allBooks.map( book => (
                            <Book
                                key = {book.id}
                                book = {book}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;