import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { changeRating } from "../../store/ratingSlice";

interface RatingButtonProps {
  ratingNumber: number;
}

export const RatingButton: React.FC<RatingButtonProps> = ({ ratingNumber }) => {
  const rating = useAppSelector(state => state.rating.rating);
  const dispatch = useAppDispatch();
  const onButtonClick = () => dispatch(changeRating(ratingNumber))
  return (
    <div onClick={onButtonClick} className={`app__button ${rating === ratingNumber ? 'active' : ''}`}>
      {ratingNumber}
    </div>
  );
}

export default RatingButton;