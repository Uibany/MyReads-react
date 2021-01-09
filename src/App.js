import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
    }

    moveBook = (book, shelf) => {
        if (this.state.books) {
            BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([book])
                }))
            })
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        const { books } = this.state;

        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author" />
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                )} />
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div>
                            <BookShelf
                                booksOnShelf={books}
                                onMoveBook={this.moveBook}
                            />
                        </div>
                        <Link to="/search" className="open-search">Add a book</Link>
                    </div>
                )} />
            </div>
        )
    }
}

export default BooksApp
