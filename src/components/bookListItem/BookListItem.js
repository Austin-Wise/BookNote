import React from 'react';
import style from './style.css';

const BookListItem = ({ book, onBookSelect }) => {
    const imgUrl = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : false;
    return (
        <div>
            <div className="card" onClick={() => onBookSelect(book)}>
                <div className="card-head">
                    <h2>{(book.volumeInfo.title).substring(0, 39)}</h2>
                    <h3>{book.volumeInfo.authors}</h3>
                </div>
                <div className="card-content">

                    {/* {(imgUrl) ? (<img className="" src={imgUrl} alt={book.volumeInfo.title} />) : "NO IMG"} */}
                    <p>{(book.volumeInfo.description) ? (book.volumeInfo.description).substring(0, 200) : ""}</p>
                </div>
            </div>
        </div>

    );
}

export default BookListItem;