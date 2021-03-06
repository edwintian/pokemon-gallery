import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
    //console.log("I register a change in input form");
  };

  render() {
    //console.log("rendering in SearchForm", this.props, this.state);
    return (
      <div className="form">
        <input
          type="text"
          className="input"
          value={this.state.searchText}
          onChange={this.handleChange}
          aria-label="filter-text"
        />
        <button
          className="button"
          onClick={() => this.props.updateSearchText(this.state.searchText)}
          aria-label="button"
        >
          Filter by Name
        </button>
      </div>
    );
  }
}

export default SearchForm;
