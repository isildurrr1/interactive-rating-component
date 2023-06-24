import { useAppSelector } from "../../hooks/hook";

const Reaction: React.FC = () => {
  const rating = useAppSelector(state => state.rating.rating);
  return(
    <div className="app__container">
        <div className="reaction__image"/>
        <div className="reaction__select">
          {`You selected ${rating} out of 5`}
        </div>
        <div className="app__title app__title-center">Thank you!</div>
        <p className="app__paragraph app__paragraph-center">We appreciate you taking the time to give a rating.
        if you ever need more support, don't hesitate to get in touch!</p>
      </div>
  );
}

export default Reaction;