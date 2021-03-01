import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleSearchTerm extends Component{
    static propTypes = {
        searchTerm: PropTypes.string.isRequired,
        termStyle: PropTypes.object.isRequired,
        setQuery: PropTypes.func.isRequired,
        setActiveTerm: PropTypes.func.isRequired
    } 


    render(){
        const { searchTerm, setQuery, setActiveTerm, termStyle } = this.props;

        return(
            <ol className = "search-term" style = {termStyle} 
                onClick= {() => {setQuery(searchTerm); setActiveTerm(searchTerm) }}>
                {searchTerm}
            </ol>
        )

    }
}

export default SingleSearchTerm;