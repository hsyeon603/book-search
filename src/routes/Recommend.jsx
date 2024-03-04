import { useEffect, useState } from 'react';
import RecommendMain from '../components/RecommendMain.jsx';
import RecommendChoice from '../components/RecommendChoice.jsx';
import RecommendResult from '../components/RecommendResult.jsx';
import resultsData from '../assets/jsons/recommend-results.json';

export default function Recommend() {
  const [progress, setProgress] = useState('waiting'); // waiting, progress, completed
  const [type, setType] = useState('');
  const [data, setData] = useState({});
  const [recommendBooks, setRecommendBooks] = useState([]);

  useEffect(() => {
    if (type) {
      const foundData = resultsData.find((result) => result.type === type);
      setData((prev) => foundData);
      findBooks(foundData);
    }
  }, [type]);

  const findBook = async (isbn) => {
    const response = await fetch(
      `http://data4library.kr/api/srchBooks?authKey=${import.meta.env.VITE_API_KEY}&isbn13=${isbn}&format=json`
    );

    const json = await response.json();

    return json.response.docs[0].doc;
  };

  const findBooks = async (data) => {
    const result = await Promise.all(data.books.map((book) => findBook(book)));
    setRecommendBooks((prev) => result);
  };

  return (
    <>
      {progress === 'waiting' && <RecommendMain handleProgress={setProgress} />}
      {progress === 'progress' && <RecommendChoice handleProgress={setProgress} handleType={setType} />}
      {progress === 'completed' && (
        <RecommendResult handleProgress={setProgress} handleType={setType} data={data} books={recommendBooks} />
      )}
    </>
  );
}
