import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
    //clarifying that the SearchBar component has a method called onInputChange
    //if we don't bind this to the method, we will get an error on this when we try to run onInputChange
    //.bind(this) makes the context of this the SearchBar
    //to avoid having to bind this use fat arrow functions:
        //instead of onChange={this.onInputChange} use
        //nChange={event => this.onInputChange(event.target.value)}

    this.onInputChange = this.onInputChange.bind(this);
    this.onFromSubmit =this.onFromSubmit.bind(this);
  }

  //if a callback function has a reference to this, we MUST bind the context of this to the constructor
  //works differently when using fat arrow functions reference SearchBar in react-youtube-gh for an example
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFromSubmit(event) {
    event.preventDefault();
    
    //need to go and fetch weather data
    //this is available to us because of mapDispatchToProps and connect
    this.props.fetchWeather(this.state.term);
    //clear the field
    this.setState({
        term: ''
    })
  }

  render() {
    return (
      <form 
        className="input-group" 
        onSubmit={this.onFromSubmit}>
        <input
          placeholder="Enter your favorite US city for a five day forecast!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

// null is passed bc whenever we pass a function that supposed to match the dispatch to the props of the container.  We usually pass mapStateToProps in the first postion instead of null.  
export default connect(null, mapDispatchToProps)(SearchBar)
