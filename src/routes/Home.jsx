import { useState, useEffect } from 'react';
import Search from '../components/Search.jsx';
import BookList from '../components/BookList.jsx';
import { xml2json } from 'xml-js';
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const [index, setIndex] = useState(1);

  const getBooks = async () => {
    const response = await fetch(
      `http://data4library.kr/api/loanItemSrch?authKey=5a615fb780fec17d6cffaee00487472e711a950d887996a209599630893fd7eb&startDt=2023-09-01&endDt=2023-12-31&addCode=0&pageNo=${index}&pageSize=10`
    );
    const text = await response.text();
    const jsonString = xml2json(text, { compact: true, spaces: 4 });
    const json = JSON.parse(jsonString);
    setBooks((prev) => [...prev, ...json.response.docs.doc]);
    setLoading(false);
    setIndex((prev) => ++prev);
    setIsBottom(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    if (isBottom) getBooks();
  }, [isBottom]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <BookList books={books} handleScroll={setIsBottom} />
        </>
      )}
    </>
  );
}
