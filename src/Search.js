import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import background from './pictures/background.jpeg';
import Book from './Book';
import SearchTerms from './SearchTerms';
import * as BooksAPI from './BooksAPI';

class Search extends Component { 
    constructor(props){
        super(props);
        // this.setQuery = this.setQuery.bind(this);
    }

    state = {
        query: '',
        searchResult:[]
      }

    updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
    }

    search = (query) =>{
        if(query!=''){
            BooksAPI.search(query).then(books=>{
                if(books.error){
                    this.setState({ searchResult: [] })
                }else{
                this.setState({ searchResult: books })
                }
            })
        }
    }

    setQuery = (searchTerm)=>{
        this.setState({
            query: searchTerm
        });
        this.search(searchTerm);
    }


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({searchResult: books })
        })
    }

    render() {
        const { allBooks, onMoveBook } = this.props;
        const { query, searchResult } = this.state;


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(event) => {
                                this.updateQuery(event.target.value);
                                this.search(query);
                            }}
                        />
                    </div>
                </div>

                <SearchTerms setQuery = {this.setQuery}/>
                
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResult.map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onMoveBook = {onMoveBook}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;