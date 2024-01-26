import PropTypes from 'prop-types';

export default function Book({ img, title }) {
  return (
    <div>
      <img src={img} />
      <h2>{title}</h2>
    </div>
  );
}

Book.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
