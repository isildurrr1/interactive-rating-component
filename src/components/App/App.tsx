import React from 'react';
import './App.sass';

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__button star-icon" />
        <h1 className="app__title">How did we do?</h1>
        <p className="app__paragraph">Please let us know how we
          did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
        <div className="app__buttons">
          <div className="app__button">1</div>
          <div className="app__button">2</div>
          <div className="app__button">3</div>
          <div className="app__button">4</div>
          <div className="app__button">5</div>
        </div>
        <button className='app__submit'>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
