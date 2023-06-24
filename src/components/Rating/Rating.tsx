import RatingButton from '../RatingButton/RatingButton';
import { useAppSelector, useAppDispatch } from "../../hooks/hook";
import { submitRating } from "../../store/submitSlice";

const Rating: React.FC = () => {
  const rating = useAppSelector(state => state.rating.rating);
  const dispatch = useAppDispatch();
  const submitClick = () => dispatch(submitRating(true))
  return (
    <div className="app__container">
      <div className="star-icon" />
      <h1 className="app__title">How did we do?</h1>
      <p className="app__paragraph">Please let us know how we
        did with your support request. All feedback is appreciated
        to help us improve our offering!</p>
      <div className="app__buttons">
        {[...Array(5)].map((item, index) =>
        <RatingButton key={index} ratingNumber={index+1}/>)}
      </div>
      <button disabled={rating === null} onClick={submitClick} type="submit" className='app__submit'>SUBMIT</button>
    </div>
  );
}

export default Rating;