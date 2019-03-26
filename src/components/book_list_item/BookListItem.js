import React from 'react';
import './Style.css';

/*
Ternary operations present for authors and description. While authors will default to an empty string,
details will show "no description to account for the large visual area (now -void of life-)."

Decided against adding book covers in these for two reasons. The cards would be over-sized, and many of
the covers are either pointless white squares or pixelated images.
*/


const BookListItem = ({ book, onBookSelect }) => {
    const imgUrl = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : false;
    const description = book.volumeInfo.description;
    return (
        <div className="card">
            <div className="card-head">
                {/* blue bit on each card */}
                <div className="card-head-titles">
                    <h3>{(book.volumeInfo.title).replace(/^(.{39}[^\s]*).*/, "$1")}</h3>
                    <h4>{book.volumeInfo.authors ? book.volumeInfo.authors : ""}</h4>
                </div>
            </div>
            <div className="card-content">
                {/* white body */}
                {/* {(imgUrl) ? (<img className="" src={imgUrl} alt={book.volumeInfo.title} />) : "NO IMG"} */}
                <p>{(description) ? (description).replace(/^(.{200}[^\s]*).*/, "$1") : "No Description"}</p>
                <button aria-label="More Info" class="moreInfo" onClick={() => onBookSelect(book)}>+</button>
            </div>
        </div>
    );
}

export default BookListItem;