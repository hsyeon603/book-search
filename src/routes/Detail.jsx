import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detail() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const getBook = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const json = await response.json();
    let { imageLinks, title, authors, publisher, publishedDate } = json.volumeInfo;
    let img = imageLinks?.thumbnail
      ? imageLinks.thumbnail
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';
    setBook({ img, title, authors, publisher, publishedDate });
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img style={{ width: '150px' }} src={book.img} />
      <span>{book.title}</span>
      <span>{book.authors}</span>
      <span>{book.publisher}</span>
      <span>{book.publishedDate}</span>
    </div>
  );
}
