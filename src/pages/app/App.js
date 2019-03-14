import _ from 'lodash';
import React from 'react';
import Axios from 'axios';
import SearchBar from "../../components/SearchBar";
import BookList from "../../components/BookList";
import './Style.css';

const urlForBook = 'https://www.googleapis.com/books/v1/volumes?q=';
const bookKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: [],
    }
    this.search("Storm");
  }

  search(term) {
    Axios.get(urlForBook + term + bookKey)
      .then(res => {
        const book = res.data.items;
        console.log(book);
        this.setState({ book });
      })

  }

  render() {
    const bookSearch = _.debounce((term) => { this.search(term) }, 300)
    return (
      <div className="App">
        <SearchBar onSearchTermChange={bookSearch} />
        <div className="container-fluid">
          <div className="row text-center">
            <BookList books={this.state.book} />
          </div>
        </div>
      </div >
    );
  }

}
export default App;
