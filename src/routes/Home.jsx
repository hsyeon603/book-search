import { useState, useEffect } from 'react';
import Book from '../components/Book.jsx';
import Search from '../components/Search.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const getBooks = async (keyword) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`);
    const json = await response.json();
    setBooks(json.items);
    setLoading(false);
  };

  const drawPage = () => {
    setLoading(true);
    // TODO ui 구성 후 loading 상태 변경
    setLoading(false);
  };

  useEffect(() => {
    drawPage();
  }, [books]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Search handleClick={getBooks} />
          <div>
            {books.map((book) => {
              let id = book.id;
              let { imageLinks, title } = book.volumeInfo;
              let img = imageLinks?.thumbnail
                ? imageLinks.thumbnail
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';
              return <Book key={id} id={id} title={title} img={img} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
