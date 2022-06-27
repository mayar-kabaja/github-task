import './App.css';
import { AlignItemsList, Item } from './components';


function App() {
  return (
    <div className="App">
      <AlignItemsList>
        <Item login="mauar"/>
      </AlignItemsList>
    </div>
  );
}

export default App;
