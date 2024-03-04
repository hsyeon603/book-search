import { useEffect, useState } from 'react';
import BookItem from './BookItem.jsx';

export default function RecommendResult({ handleProgress, handleType, data, books }) {
  const startTest = () => {
    handleProgress((prev) => 'progress');
    handleType((prev) => '');
  };

  return (
    <>
      <div className="recommend-hashtag">
        {data.hashtag?.map((tag) => (
          <span>{'#' + tag}</span>
        ))}
      </div>
      <div className="recommend-image" />

      <pre className="recommend-description">{data.description}</pre>
      <div className="recommend-books">
        {books.map((book) => (
          <BookItem
            id={book.isbn13}
            imgURL={book.bookImageURL}
            title={book.bookname}
            author={book.authors}
            publisher={book.publisher}
            publicationYear={book.publication_year}
            isObservingTarget={false}
          />
        ))}
      </div>
      <button className="recommend-button start" onClick={startTest}>
        다시하기
      </button>
    </>
  );
}
