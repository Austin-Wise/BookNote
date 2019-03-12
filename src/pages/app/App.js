import React from 'react';
import './Style.css';
import Axios from 'axios';

const urlForBooks = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes';
const booksKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';
class App extends React.Component {


  state = {
    bookIds: [],
    bookInfo: ""
  }

  componentDidMount() {
    Axios.get(urlForBooks + booksKey)
      .then(res => {
        const bookIds = res.data.items;
        this.setState({ bookIds });
      })


    Axios.get('https://www.googleapis.com/books/v1/volumes/gK98gXR8onwC')
      .then(res => {
        const bookInfo = res.data.volumeInfo.title;
        this.setState({ bookInfo })
      })
  }

  render() {
    return (
      <div className="App">
        <p>
          {this.state.bookIds.map(bookIds => <li>{bookIds.id}</li>)}
          {this.state.bookInfo}
        </p>
      </div>
    );
  }
}

export default App;
