import { RatingButtonProps } from "../../types/types";

export const RatingButton: React.FC<RatingButtonProps> = ({ ratingNumber, rating, onClickFunc }) => {
  const onButtonClick = () => {
    onClickFunc(ratingNumber);
  }
  return (
    <div onClick={onButtonClick} className={`app__button ${rating === ratingNumber ? 'active' : ''}`}>
      {ratingNumber}
    </div>
  );
}

export default RatingButton;