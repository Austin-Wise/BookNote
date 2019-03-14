import React from 'react';

const BookListItem = ({ book }) => {
    const imgUrl = book.volumeInfo.imageLinks.thumbnail;
    return (

        <div className="col-xs-6 col-md-2 col-lg-2 col-sm-2 bit ">
            <div className="card h-100">
                <img className="card-img-top" src={imgUrl} />
                <div className="card-body">
                    <div>
                        <h3 className="card-title">{book.volumeInfo.title}</h3>
                        <h5 className="card-text">{book.volumeInfo.authors}</h5>
                        <p>{(book.volumeInfo.description)}</p>
                    </div>
                </div>
            </div>
        </div >


    );
}

export default BookListItem;