import _ from 'lodash';
import React from 'react';
import Axios from 'axios';
import SearchBar from "../../components/SearchBar";
import BookList from "../../components/BookList";

import './Style.css';

const urlForBook = 'https://www.googleapis.com/books/v1/volumes?q=';
const bookKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';



class App extends React.Component {

  state = {
    book: [],
    isLoaded: true,
    term: ""
  }

  search(term) {
    this.setState({ isLoaded: false });
    Axios.get(urlForBook + term + bookKey)
      .then(res => {
        const book = (res.data.items && res.data.items.length) ? res.data.items : [];
        console.log(book);
        this.setState({ book });
        this.setState({ isLoaded: true });
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const bookSearch = _.debounce((term) => { this.search(term) }, 1000)
    if (this.state.isLoaded) {
      return (
        <div className="App">
          <header>
            <SearchBar onSearchTermChange={bookSearch} />
            <h1 id="logo">BookNote</h1>
          </header>
          <div className="container">
            <div className="">
              <BookList books={this.state.book} />
            </div>
          </div>
        </div >
      );
    } else {
      return (
        <div className="App">
          <SearchBar onSearchTermChange={bookSearch} />
          <div>
            <div>
              <h2>Loading...</h2>
            </div>
          </div>
        </div >
      );
    }
  }
}

export default App;
