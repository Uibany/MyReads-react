import React, { Component } from 'react';
import {HashRouter, Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Header from './Header';
import Search from './Search';
import './App.css'

class BooksApp extends Component {
    state = {
        books: [],
        searchResult : []
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
            this.setState({ books: books, searchResult: books })
        })
    }

    render() {
        const { books, searchResult } = this.state;

        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search 
                        allBooks = {searchResult}
                        onMoveBook={this.moveBook}/>
                )} />
                <Route exact path='/' render={() => (
                    <div >
                        <Header/>
                        <div>
                            <BookShelf
                                booksOnShelf={books}
                                onMoveBook={this.moveBook}
                            />
                        </div>
                        <Link to="/search" className="open-search">ADD BOOKS</Link>
                    </div>
                )} />
            </div>
            </HashRouter>
        )
    }
}

export default BooksApp
