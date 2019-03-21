import React from 'react';
import BookListItem from '../book_list_item/BookListItem';
import BookDetail from '../book_detail/BookDetail';
import './Style.css';
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
                onBookSelect={selectedBook => this.setState({ selectedBook })}
                key={book.etag}
                book={book} />
        })
        return (
            <div className="article-container">
                <BookDetail
                    onBookSelect={selectedBook => this.setState({ selectedBook })}
                    book={this.state.selectedBook}
                />
                {articles}
            </div>
        )
    }
}
export default BookList;