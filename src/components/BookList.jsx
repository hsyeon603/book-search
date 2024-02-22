import BookItem from './BookItem.jsx';
import { refineAuthor } from '../utils/util.js';

export default function BookList({ books, handleScroll }) {
  return (
    <div id="book-list">
      {books.map((book, i) => {
        let id = book.isbn13._cdata;
        let title = book.bookname._cdata;
        let imageURL = book.bookImageURL._cdata;
        let author = refineAuthor(book.authors._cdata);
        let publisher = book.publisher._cdata;
        let publicationYear = book.publication_year._cdata;
        let ranking = book.ranking._text;
        let isObserveTarget = i === books.length - 2 ? true : false;
        return (
          <BookItem
            key={id}
            id={id}
            ranking={ranking}
            title={title}
            author={author}
            imgURL={imageURL}
            publisher={publisher}
            publicationYear={publicationYear}
            isObserveTarget={isObserveTarget}
            handleScroll={handleScroll}
          />
        );
      })}
    </div>
  );
}
