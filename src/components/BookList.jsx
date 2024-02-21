import Book from '../components/Book.jsx';

export default function BookList({ books, handleScroll }) {
  return (
    <div id="book-list">
      {books.map((book, i) => {
        let id = book.isbn13._cdata;
        let title = book.bookname._cdata;
        let imageURL = book.bookImageURL._cdata;
        let isObserveTarget = i === books.length - 2 ? true : false;
        return (
          <Book
            key={id}
            id={id}
            title={title}
            img={imageURL}
            isObserveTarget={isObserveTarget}
            handleScroll={handleScroll}
          />
        );
      })}
    </div>
  );
}
