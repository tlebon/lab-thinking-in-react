import React, { Component } from 'react';

import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class App extends Component {
  render() {
    return (<table>
      <SearchBar />
      <ProductTable />
      </table>
    );
  }
}

export default App;
