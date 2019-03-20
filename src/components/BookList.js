import React from 'react';
import BookListItem from './bookListItem/BookListItem';

const BookList = (props) => {
    const articles = props.books.map((book) => {
        return <BookListItem
            onBookSelect={props.onBookSelect}
            key={book.etag}
            book={book} />
    })
    return (
        <div className="body-container">
            <div className="article-container">
                {articles}
            </div>
        </div>
    )
}
export default BookList;