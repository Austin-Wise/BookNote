import React from 'react';
import './Style.css';
import Axios from 'axios';


const urlForBooks = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes';
const booksKey = '&key=AIzaSyDvTrjRMZ6tgY_o1oUtEC4KhQUtDdjsLwA';
class App extends React.Component {

  componentDidMount() {
    Axios.get(urlForBooks + booksKey)
      .then(res => {
        console.log(res);
      })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
