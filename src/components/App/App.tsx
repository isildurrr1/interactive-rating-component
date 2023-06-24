import { useState } from 'react'
import './App.sass';
import Reaction from '../Reaction/Reaction';
import Rating from '../Rating/Rating';

function App() {
  const [rating, setRating] = useState<number | null>(null)
  const [submited, setSubmited] = useState<boolean>(false);
  const changeRating = (num: number) => {
    setRating(num);
  }

  const confirmSubmit = () => {
    setSubmited(true)
  }

  return (
    <div className="App">
      {
        !submited ?
          <Rating rating={rating} onButtonClick={changeRating} onSubmitClick={confirmSubmit}/>
          : <Reaction rating={rating}/>
      }
    </div>
  );
}

export default App;
