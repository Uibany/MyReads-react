import React, { Component } from 'react';
import {HashRouter, Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import Header from './Header';
import Search from './Search';
import BookDetails from './BookDetails';
import './App.css'

class BooksApp extends Component {
    state = {
        books: [],
        searchResult : [],
        showBookDetails : false
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

    toggleBookDetails = () => {
        this.setState({
          showBookDetails: !this.state.showBookDetails
        })
        console.log(this.state.showBookDetails);
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books, searchResult: books, showBookDetails : false })
        })
    }

    render() {
        const { books, searchResult, showBookDetails } = this.state;

        return (
            <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <Route exact path='/search' render={() => (
                    <Search 
                        allBooks = {searchResult}
                        onMoveBook = {this.moveBook}/>
                )} />
                <Route exact path='/' render={() => (
                    <div >
                        {showBookDetails ? <BookDetails toggleBookDetails={this.toggleBookDetails} /> : null}
                        <Header/>
                        <div>
                            <BookShelf
                                booksOnShelf={books}
                                onMoveBook={this.moveBook}
                                toggleBookDetails={this.toggleBookDetails}
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
