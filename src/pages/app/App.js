import _ from 'lodash';
//Lodash allows for search without "enter"... much like Google Search
import React from 'react';
import Axios from 'axios';
//To handle AJAX Requests
import SearchBar from '../../components/SearchBar';
import BookList from '../../components/book_list/BookList';
import loadinfo from "./loadinfo.net.gif";
//Loading GIF

import './Style.css';

const urlForBook = 'https://www.googleapis.com/books/v1/volumes?&maxResults=30&q=';
const bookKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';

class App extends React.Component {

  //book -> list of books in search
  //isLoaded -> if books are not loaded, isLoaded returns false until they are processed
  //term -> searchfield value
  state = {
    book: [],
    isLoaded: true,
    term: ""
  }

  search(term) {
    this.setState({ isLoaded: false });
    if (term == "") { this.setState({ isLoaded: true }); }
    //This is a bit hacky, but to be accomodating to React's ridiculous -no if statements- in the render method tyrannical rule,
    //we are placing this here.  Essentially, if there isnt anything in the search bar, the call-to-action is displayed.
    //Alternative of only having if-elseif-else statements in the render resulted in longer load times, as well as out of sync loads.
    //Also, call to action would only display at start.

    Axios.get(urlForBook + term + bookKey)
      .then(res => {
        const book = (res.data.items && res.data.items.length) ? res.data.items : [];
        console.log(book);
        //CL out the json object from Google Books
        this.setState({ book });
        //Pass books array into State
        this.setState({ isLoaded: true });
        //Books have now been loaded, as these are synchronous.
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const bookSearch = _.debounce((term) => { this.search(term) }, 1000)
    //Lodash has a timer argument, 1000 -> 1 second. After user types, lodash waits for 1 second to pass info to Axios
    if (this.state.book.length == 0) {
      //Again.. hacky stuff. Check ln. 29 for more details.
      //this return is for the Call to action
      return (
        <div className="App">
          <header>
            <SearchBar onSearchTermChange={bookSearch} />
            <h1 id="logo">BookNote</h1>
          </header>
          <div id="c2a">
            {/* call to action */}
            <h2>Get started by searching a book</h2>
          </div>
        </div >
      );
    } else if (this.state.isLoaded) {
      return (
        //this return is for the Call to action
        <div className="App">
          <header>
            <SearchBar onSearchTermChange={bookSearch} />
            <h1 id="logo">BookNote</h1>
          </header>
          <div className="container">
            <BookList books={this.state.book} />
          </div>
        </div >
      );
    } else if (!this.state.isLoaded) {
      return (
        //Loading books. Check ln. 35-48.
        <div className="App">
          <header>
            <SearchBar onSearchTermChange={bookSearch} />
            <h1 id="logo">BookNote</h1>
          </header>
          <div id="appLoading">
            {/* Loading gif */}
            <img src={loadinfo} alt="loading gif" />

          </div>
        </div >
      );
    }
  }
}

export default App;
