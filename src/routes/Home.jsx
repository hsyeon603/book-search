import { useState, useEffect } from 'react';
import Book from '../components/Book.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flower`);
    const json = await response.json();
    setBooks(json.items);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {books.map((book) => {
            let id = book.id;
            let { imageLinks, title } = book.volumeInfo;
            let img = imageLinks.thumbnail ? imageLinks.thumbnail : '';
            return <Book key={id} title={title} img={img} />;
          })}
        </div>
      )}
    </>
  );
}
