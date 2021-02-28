import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SingleSearchTerm extends Component{
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