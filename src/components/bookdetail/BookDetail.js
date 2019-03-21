import React from 'react';
import './Style.css';

const BookDetail = ({ book }) => {

    if (!book) {
        return <div id="no_book"></div>
    }//to cover async issues.
    // const bookId = book.id.bookId;

    return (
        <div className="book-detail">

            <div className="details">
                <div className="detailHead">
                    {book.volumeInfo.title}
                </div>
                <div className="detailBody">
                    {book.volumeInfo.description}
                </div>
            </div>
        </div>
    )
}

export default BookDetail;