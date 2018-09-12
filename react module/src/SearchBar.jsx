import React from 'react'


class SearchBar extends React.Component {
  render() {
    return (
      <form className="searchBar">
        <input type="text" placeholder="Search..." />
        <br />
        <input type="checkbox" />
        <label htmlFor="checkbox">Only show in stock items</label>
      </form>)
  }
}


export default SearchBar