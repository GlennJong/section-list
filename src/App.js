import './App.css';
import List from './List';

const data = [
  'item-1',
  'item-2',
  'item-3',
  'item-4',
  'item-5',
  'item-6',
]

function App() {
  return (
    <List data={data} />
  );
}

export default App;
