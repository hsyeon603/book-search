export default function RecommendMain({ handleProgress }) {
  const startTest = () => {
    handleProgress((prev) => 'progress');
  };

  return (
    <>
      <span className="recommend-subtitle">독서 성향 테스트</span>
      <h2 className="recommend-maintitle">
        도서관에 왔는데 막상 손 가는 책이 없다면?
        <br />내 성향에 맞는 책 추천 받기!
      </h2>
      <div className="recommend-image" />
      <button className="recommend-button" onClick={startTest}>
        테스트 시작
      </button>
    </>
  );
}
