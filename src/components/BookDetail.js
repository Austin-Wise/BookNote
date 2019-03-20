import React from 'react';

const BookDetail = ({ book }) => {

    if (!book) {
        return <div id="no_book"></div>
    }//to cover async issues.
    // const bookId = book.id.bookId;

    return (
        <div className="book-detail">

            <div className="details">
                <div>
                    {book.volumeInfo.title}
                </div>
                <div>
                    {book.volumeInfo.description}
                </div>
            </div>
        </div>
    )
}

export default BookDetail;