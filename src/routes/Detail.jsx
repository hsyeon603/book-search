import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { xml2json } from 'xml-js';
import { refineAuthor } from '../utils/util.js';
import DetailItem from '../components/DetailItem.jsx';

export default function Detail() {
  const [detail, setDetail] = useState({});
  const [recommendation, setRecommendation] = useState();
  const { id } = useParams();

  const getDetail = async () => {
    const response = await fetch(
      `http://data4library.kr/api/srchDtlList?authKey=${
        import.meta.env.VITE_API_KEY
      }&isbn13=${id}&loaninfoYN=Y& displayInfo=age`
    );
    const text = await response.text();
    const jsonString = xml2json(text, { compact: true, spaces: 4 });
    const json = JSON.parse(jsonString).response.detail.book;

    let title = json.bookname._cdata;
    let imageURL = json.bookImageURL._cdata;
    let author = refineAuthor(json.authors._cdata);
    let publisher = json.publisher._cdata;
    let publicationDate = json.publication_date._cdata;
    let className = json.class_nm._cdata;
    let description = json.description._cdata;

    setDetail({ imageURL, title, author, publisher, publicationDate, className, description });
  };

  const getRecommendation = async () => {
    const response = await fetch(`
    http://data4library.kr/api/usageAnalysisList?authKey=${import.meta.env.VITE_API_KEY}&isbn13=${id}&format=json`);
    const json = await response.json();

    // setRecommendation(json.response.readerRecBooks);
  };

  useEffect(() => {
    getDetail();
    getRecommendation();
  }, []);

  useEffect(() => {}, [recommendation]);

  return (
    <DetailItem
      imageURL={detail.imageURL}
      className={detail.className}
      title={detail.title}
      author={detail.author}
      publisher={detail.publisher}
      publicationDate={detail.publicationDate}
      description={detail.description}
    />
  );
}
