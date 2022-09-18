
import {UseState} from './UseState.js'
import {UseReducer} from './UseReducer.js'

import './App.css';

function App() {
  return (
    <div className="App">
      
      <UseState msj = "carlos"/>
      <UseReducer msj = "Use reducer" />

    </div>
  );
}

export default App;
