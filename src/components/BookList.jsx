import Book from '../components/Book.jsx';

export default function BookList({ books, handleScroll }) {
  return (
    <div>
      {books.map((book, i) => {
        let id = book.id;
        let { imageLinks, title } = book.volumeInfo;
        let img = imageLinks?.thumbnail;
        let isObserveTarget = i === books.length - 2 ? true : false;
        console.log(i, isObserveTarget);
        return (
          <Book
            key={id}
            id={id}
            title={title}
            img={img}
            isObserveTarget={isObserveTarget}
            handleScroll={handleScroll}
          />
        );
      })}
    </div>
  );
}
