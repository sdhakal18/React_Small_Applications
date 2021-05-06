import './App.css';
import SynCounter from './Components/SyncCounter'
import AsynCounter from './Components/AsynCounter'
function App() {
  return (
    <div className="App">
     <SynCounter></SynCounter>
     <AsynCounter></AsynCounter>
    </div>
  );
}

export default App;
