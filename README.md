# BookNote
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://austin-wise.github.io/BookNote/#/)

#### Booknote is an online catalog purposed for finding your next favorite book!

  - Type book title, author, or ISBN number in searchbar.
  - Browse through publications matching the search criteria.
  - Find the book you like!

## Publication Card View
  - Quick browse through up to 30 publications in a single view by title, 
   author, and a short description.
  - click the (+) button to view a detailed view of the selected publication.

## Publication Detail View 
You can also:
  - Detailed view of publication's Title, Description, Author, Page Count, Category,
   Publication House and Date, as well as ISBN
  - View Additional details by clicking the "Google Preview" button, redirecting to the
   publication page within Google Books

### Tech
Booknote uses a number of open source resources in order to work properly:
- [React v16.0](https://reactjs.org/): Though the 404 page is routed to a seperate page, 
    the majority of the application can be seen in a single view.
- [Lodash](https://lodash.com/): utilized to allow for a more seamless experience when typing in the
 search parameters.
- [Axios](): used to handle AJAX request: 
- API retrieved from [Google Books](https://developers.google.com/books/).
- In order to optimize routing for Github Pages, [HashRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md) was used in place of 
 default methods within React-Router-DOM
- Font Used: [Google Roboto](https://fonts.google.com/specimen/Roboto)

### Installation
Install the dependencies and devDependencies and start the server.
```sh
$ cd booknote
$ yarn install
$ yarn start
```
