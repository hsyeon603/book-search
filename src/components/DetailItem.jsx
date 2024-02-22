import PropTypes from 'prop-types';

export default function DetailItem({ imageURL, className, title, author, publisher, publicationDate, description }) {
  return (
    <div className="detail">
      <div className="detail-info">
        <img className="image" src={imageURL} />
        <dl>
          <dt className="visually-hidden">분류</dt>
          <dd className="className">{className}</dd>
          <dt className="visually-hidden">도서명</dt>
          <dd className="title">{title}</dd>
          <dt className="visually-hidden">저자</dt>
          <dd className="author">{author}</dd>
          <dt className="visually-hidden">출판사</dt>
          <dd className="publisher">{publisher}</dd>
          <dt className="visually-hidden">출판일</dt>
          <dd className="publication-date">{publicationDate}</dd>
        </dl>
      </div>
      <section className="detail-description">
        <h2 className="title">작품 소개</h2>
        <p>{description}</p>
      </section>
      <section className="detail-others">
        <h2 className="title">저자의 다른 저서</h2>
        <p>{description}</p>
      </section>
      <section className="detail-recommendation">
        <h2 className="title">이 책과 함께 둘러본 책</h2>
        <p>{description}</p>
      </section>
    </div>
  );
}

DetailItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
