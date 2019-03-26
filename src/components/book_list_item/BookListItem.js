import React from 'react';
import './Style.css';

const BookListItem = ({ book, onBookSelect }) => {
    const imgUrl = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : false;
    const description = book.volumeInfo.description;
    return (
        <div className="card">
            <div className="card-head">
                <div className="card-head-titles">
                    <h3>{(book.volumeInfo.title).replace(/^(.{39}[^\s]*).*/, "$1")}</h3>
                    <h4>{book.volumeInfo.authors ? book.volumeInfo.authors : ""}</h4>
                </div>
            </div>
            <div className="card-content">

                {/* {(imgUrl) ? (<img className="" src={imgUrl} alt={book.volumeInfo.title} />) : "NO IMG"} */}
                <p>{(description) ? (description).replace(/^(.{200}[^\s]*).*/, "$1") : "No Description"}</p>
                <button aria-label="More Info" class="moreInfo" onClick={() => onBookSelect(book)}>+</button>
            </div>
        </div>
    );
}

export default BookListItem;