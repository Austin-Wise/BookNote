import React from 'react';
import './Style.css';

const BookDetail = ({ book, onBookSelect }) => {

    if (!book) {
        return <div id="no_book"></div>
    }//to cover async issues.
    // const bookId = book.id.bookId;

    return (
        <div className="detail-view">
            <div className="detail-head">
                <h3>{(book.volumeInfo.title).replace(/^(.{39}[^\s]*).*/, "$1")}</h3>
                <div><p className="isbn">ISBN: {book.volumeInfo.industryIdentifiers[0].identifier}</p></div>
            </div>
            <div className="detail-d">
                <div className="detail-body">
                    <h4 className="detail-author">{book.volumeInfo.authors ? book.volumeInfo.authors : "[No Author Data]"}</h4>
                    <p className="detail-category">{book.volumeInfo.categories ? book.volumeInfo.categories : "[No Category Data]"}</p>
                    <p className="detail-pages">{book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "[No Page Count Data]"} Pages</p>
                    <p className="detail-publisher">Publisher: {book.volumeInfo.publisher}, {book.volumeInfo.publishedDate}</p>
                    <p className="detail-description">{book.volumeInfo.description ? book.volumeInfo.description : "[No Author Data]"}</p>
                </div>
                <div className="detail-options">
                    <a className="button-google" href={book.volumeInfo.previewLink} target="_blank">View in Books</a>
                    <button className="button-exit" onClick={() => onBookSelect(null)}>Done</button>
                </div >
            </div>
        </div >
    )
}

export default BookDetail;