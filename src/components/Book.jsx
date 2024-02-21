import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Book({
  id,
  imgURL,
  title,
  author,
  publisher,
  publicationYear,
  ranking,
  isObserveTarget,
  handleScroll,
}) {
  let bookWrapper = useRef();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) handleScroll(true);
    });
  });

  useEffect(() => {
    if (isObserveTarget) observer.observe(bookWrapper.current);
  }, [bookWrapper.current]);

  return (
    <div ref={bookWrapper} className="book">
      <Link to={`/book/${id}`}>
        <img src={imgURL} className="book-image" />
        <dl className="book-info">
          <dt className="visually-hidden">도서명</dt>
          <dd className="title">{title}</dd>
          <dt className="visually-hidden">저자</dt>
          <dd className="author">{author}</dd>
          <dt className="visually-hidden">출판사</dt>
          <dd className="publisher">{publisher}</dd>
          <dt className="visually-hidden">출판년도</dt>
          <dd className="publication-year">{publicationYear}</dd>
        </dl>
      </Link>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
