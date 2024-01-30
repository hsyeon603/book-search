import { useRef } from 'react';

export default function Search({ handleClick }) {
  const searchInput = useRef();
  // 버튼을 눌렀을 때 검색 데이터 api 처리하는 함수
  const searchBook = () => {
    let keyword = searchInput.current.value;
    handleClick(keyword);
  };

  return (
    <div>
      <input type="text" ref={searchInput} />
      <button onClick={searchBook}>search</button>
    </div>
  );
}
