import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
  <div className="main">
    <h2 className="main-header">React Crud Operations</h2>
    <div>
      <Create />
      <p></p>
      <Read />
      <fr />
      <Update />
    </div>
  </div>
  );
}

export default App;

