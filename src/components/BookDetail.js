import React from 'react';

const BookDetail = ({ book }) => {

    if (!book) {
        return <div>Loading...</div>
    }//to cover async issues.
    // const bookId = book.id.bookId;

    return (
        <div className="book-detail col-md-8">

            {console.log("bookDetail Loaded")}
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