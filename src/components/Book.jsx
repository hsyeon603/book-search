import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

export default function Book({ id, img, title, isObserveTarget, handleScroll }) {
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
    <div ref={bookWrapper}>
      <Link to={`/book/${id}`}>
        <img src={img} className="skeleton" />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
