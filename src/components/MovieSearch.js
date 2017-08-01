import React, { Component } from 'react';
import '../css/style.css';

class MovieSearch extends Component {
   constructor(props) {
      super(props);

      this.state = {
          searchBy: 'actor',
          searchInput: 'jackson',
          alert: ''
      }

      this.onChangeValue = this.onChangeValue.bind(this);
      this.onSearch = this.onSearch.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
      this.props.movieSearch(this.state.searchBy, this.state.searchInput);
  }

  onChangeValue(e) {
      var nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  onSearch() {
      this.props.movieSearch(this.state.searchBy, this.state.searchInput);
  }

  handleKeyPress(e) {
      if(e.charCode===13) {
          this.onSearch();
      }
  }

  render() {
      return(
          <div>
              <label className="search-label"><b>SEARCH OPTION</b></label>
              <select className="search-select" name="searchBy" onChange={this.onChangeValue}>
                  <option value="actor">Actor</option>
                  <option value="director">Director</option>
              </select>
              <label className="search-label"><b>SEARCH INPUT</b></label>
              <input className="search-input search-input-border" name="searchInput" value={this.state.searchInput} onChange={this.onChangeValue}/>
              <button className="search-btn" onClick={this.onSearch} onKeyPress={this.handleKeyPress}>SEARCH</button>
          </div>
      );
  }
}

export default MovieSearch;
