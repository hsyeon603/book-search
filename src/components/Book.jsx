import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Book({ id, img, title }) {
  return (
    <div>
      <Link to={`/book/${id}`}>
        <img src={img} />
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
