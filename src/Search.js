import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import SearchTerms from './SearchTerms';
import BookDetails from './BookDetails';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
    static propTypes = {
        onMoveBook: PropTypes.func.isRequired
    } 

    state = {
        query: '',
        searchResult:[],
        showBookDetails : false,
        currentBook: null
      }

    updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
    }

    search = (query) =>{
        if(query!==''){
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

    toggleBookDetails = () => {
        this.setState({
          showBookDetails: !this.state.showBookDetails
        })

    }

    setCurrentBook = (book) =>{
        this.setState({
            currentBook: book
        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({searchResult: books })
        })
    }

    render() {
        const { onMoveBook } = this.props;
        const { query, searchResult, showBookDetails, currentBook } = this.state;

        return (
            <div className="search-books">
                {showBookDetails ? <BookDetails toggleBookDetails={this.toggleBookDetails} currentBook = {currentBook}/> : null}
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
                                toggleBookDetails={this.toggleBookDetails}
                                setCurrentBook={this.setCurrentBook}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;