import _ from 'lodash';
import React from 'react';
import Axios from 'axios';
import SearchBar from "../../components/SearchBar";
import BookList from "../../components/BookList";
import BookDetail from "../../components/BookDetail";
import './Style.css';

const urlForBook = 'https://www.googleapis.com/books/v1/volumes?q=';
const bookKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],
      selectedBook: null
    }
    this.search("Storm");
  }

  search(term) {
    Axios.get(urlForBook + term + bookKey)
      .then(res => {
        const book = res.data.items;
        console.log(book);
        this.setState({ book });
      }).catch(error => {
        console.log(error)
      })

  }

  render() {
    const bookSearch = _.debounce((term) => { this.search(term) }, 1000)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={bookSearch} />
        <div className="container-fluid">
          <div className="row text-center">
            <BookList books={this.state.book}
              onBookSelect={selectedBook => this.setState({ selectedBook })} />
          </div>
        </div>
        <BookDetail book={this.state.selectedBook} />
      </div >
    );
  }

}
export default App;
