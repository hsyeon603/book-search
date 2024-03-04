import { Link } from 'react-router-dom';

export default function RecommendButton() {
  return (
    <Link to={'/recommend'} className="recommend-button">
      내 취향 책 추천받기
    </Link>
  );
}
