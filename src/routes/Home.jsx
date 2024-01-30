import { useState, useEffect } from 'react';
import Search from '../components/Search.jsx';
import BookList from '../components/BookList.jsx';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [isBottom, setIsBottom] = useState(false);
  const [index, setIndex] = useState(0);

  const getBooks = async (word) => {
    if (word) {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${word}&startIndex=${index}`);
      const json = await response.json();
      setBooks((prev) => [...prev, ...json.items]);
      setLoading(false);
      setIndex((prev) => (prev += 10));
      setIsBottom(false);
    }
  };

  const drawPage = () => {
    setLoading(true);
    // TODO ui 구성 후 loading 상태 변경
    setLoading(false);
  };

  useEffect(() => {
    drawPage();
  }, [books]);

  useEffect(() => {
    getBooks(searchWord);
  }, [searchWord]);

  useEffect(() => {
    if (isBottom) getBooks(searchWord);
  }, [isBottom]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Search handleClick={setSearchWord} />
          <BookList books={books} handleScroll={setIsBottom} />
        </>
      )}
    </>
  );
}
