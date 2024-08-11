import DisplayData from './component/DisplayData';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DisplayData />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
