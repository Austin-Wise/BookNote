import React from 'react';
import './Style.css';

const BookDetail = ({ book, onBookSelect }) => {

    if (!book) {
        return <div id="no_book"></div>
    }//to cover async issues.
    // const bookId = book.id.bookId;

    //For ternaries on ln.25, 26, 27, 27, check 'BookListItem.js' comments



    return (
        <div className="detail-view">
            <div className="detail-head">
                {/* ln.19 cuts down the title to a reasonable size. also cuts at end of word */}
                <h3>{(book.volumeInfo.title).replace(/^(.{39}[^\s]*).*/, "$1")}</h3>
                <div><p className="isbn">ISBN: {book.volumeInfo.industryIdentifiers[0].identifier}</p></div>
            </div>
            <div className="detail-d">
                <div className="detail-body">
                    <h4 className="detail-author">{book.volumeInfo.authors ? book.volumeInfo.authors : ""}</h4>
                    <p className="detail-category">{book.volumeInfo.categories ? book.volumeInfo.categories : ""}</p>
                    <p className="detail-pages">{book.volumeInfo.pageCount ? book.volumeInfo.pageCount + " Pages" : ""}</p>
                    <p className="detail-publisher">{(book.volumeInfo.publisher && book.volumeInfo.publishedDate) ? "Publisher: " + book.volumeInfo.publisher + ", " + book.volumeInfo.publishedDate : ""}</p>
                    <p className="detail-description">{book.volumeInfo.description ? book.volumeInfo.description : "No Description"}</p>
                </div>
                <div className="detail-options">
                    {book.volumeInfo.previewLink ? (<a className="button-google" href={book.volumeInfo.previewLink} target="_blank">View in Books</a>) : ""}
                    <button aria-label="close" className="button-exit" onClick={() => onBookSelect(null)}>-</button>
                    {/* Though  the button-exit shows only a ( - ) aria-lables allow for -some- readout for handicapable access.*/}
                </div >
            </div>
        </div >
    )
}

export default BookDetail;