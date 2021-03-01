import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleSearchTerm from './SingleSearchTerm';

const allSearchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 
    'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 
    'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
    'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 
    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 
    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 
    'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
    'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
     'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]

const styleActive = {color: "white", backgroundColor: "#ca9b34"};
const styleInactive = {backgroundColor: "white", color: "#ca9b34"};

class SearchTerms extends Component{
    static propTypes = {
        setQuery: PropTypes.func.isRequired
    } 

    state = {
        showSearchTerms: false,
        searchTerms:[],
        activeTerm: null,
        toggleButtonText: "Show suggested search terms",
        toggleButtonStyle: {color: "white", backgroundColor: "#ca9b34"}
    }

    toggleSearchTerms = () =>{
        this.setState({
            showSearchTerms: !this.state.showSearchTerms
        })
        console.log(this.state.showSearchTerms);
        this.state.showSearchTerms === false? 
            this.setState({
                searchTerms:allSearchTerms,
                toggleButtonText: "Hide suggested search terms", 
                toggleButtonStyle: {color: "#ca9b34", backgroundColor: "#f5f3f3"}
            })
            :this.setState({
                searchTerms:[],
                toggleButtonText: "Show suggested search terms", 
                toggleButtonStyle: {color: "white", backgroundColor: "#ca9b34"}
            });
    }

    setActiveTerm = (term) => {
        this.setState({
            activeTerm: term
        })
    }
        
    
    render(){
        const{ searchTerms, activeTerm, toggleButtonText, toggleButtonStyle} = this.state;
        const{ setQuery } = this.props; 

        return (
            <div className = "search-terms-collection">
                <button className= "search-terms-toggle" onClick= {this.toggleSearchTerms} style={toggleButtonStyle}>
                    {toggleButtonText}
                </button>

                <li className = "search-terms-list">
                    {searchTerms.map(term=>{
                        return(
                            activeTerm === term?
                            <SingleSearchTerm searchTerm = {term} setQuery = {setQuery} setActiveTerm = {this.setActiveTerm} termStyle = {styleActive}/>
                            :<SingleSearchTerm searchTerm = {term} setQuery = {setQuery} setActiveTerm = {this.setActiveTerm} termStyle = {styleInactive}/>
                        )
                    })}
                </li>
            </div>

        )
    }

}
export default SearchTerms;