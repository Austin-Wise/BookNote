import React from 'react';
import BookListItem from './bookListItem/BookListItem';
import BookDetail from "./bookdetail/BookDetail";
class BookList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: props.books,
            selectedBook: null,
        }
    }

    render() {
        let articles = this.state.books.map((book) => {
            return <BookListItem
                onBookSelect={this.selectedBook}
                key={book.etag}
                book={book} />
        })
        return (
            <div className="body-container" >
                <div className="article-container">
                    <BookDetail
                        bookDetail={this.state.selectedBook}
                        onBookSelect={selectedBook => this.setState({ selectedBook })} />
                    {articles}
                </div>
            </div>
        )
    }
}
export default BookList;