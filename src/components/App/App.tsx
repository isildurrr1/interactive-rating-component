import Reaction from '../Reaction/Reaction';
import Rating from '../Rating/Rating';
import './App.sass';
import { useAppSelector } from '../../hooks/hook';

function App() {
  const submited = useAppSelector(state => state.submit.submited)
  return (
    <div className="App">
      {!submited ? <Rating/> : <Reaction />}
    </div>
  );
}

export default App;
