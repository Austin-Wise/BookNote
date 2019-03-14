import React from 'react';
import BookListItem from './BookListItem';

const BookList = (props) => {

    const articles = props.books.map((book) => {
        return <BookListItem
            onBookSelect={props.onBookSelect}
            key={book.etag}
            book={book} />
    })
    return (
        <div className="m-5 d-flex flex-wrap">

            {articles}

        </div>
    )
}
export default BookList;