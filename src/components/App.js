import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import Autosuggest from 'react-autosuggest';
import './App.css';
import Search from './Search';
import { Link } from 'react-router';

const languages = [
  {
    name: 'Jon',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Software',
    year: 2003
  },
  {
    name: 'However',
    year: 2003
  },
  {
    name: 'Libraly',
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => suggestion.name;

const renderSuggestionsContainer = ({ containerProps, children, query }) => (
  <div {...containerProps}>
    {children}
    {
      <div className="footer">
        Press Enter to search <strong>{query}</strong>
      </div>
    }
  </div>
);

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    console.log(this.props.params.testvalue)
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Fill in the blank",
      value,
      onChange: this.onChange,
      
    };
    return (
        <header>
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderSuggestionsContainer={renderSuggestionsContainer}/>
          <Search value={this.state.value}/>
          <ul>
              <li><Link to={`/book/${this.state.value}`}>Create Idea</Link></li>
          </ul>
        </header>
    );


  }
}

export default App

