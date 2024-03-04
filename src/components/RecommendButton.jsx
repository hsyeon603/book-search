import { Link } from 'react-router-dom';

export default function RecommendButton() {
  return (
    <Link to={'/recommend'} className="recommend-button">
      MY BOOK TASTE IS...
    </Link>
  );
}
