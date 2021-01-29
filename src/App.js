import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Feed from './Feed'
import Stats from './Stats'

function App() {
  return (
    <div className="App">
      <div className="Header">
      <Header/>
      </div>
      <div className="Body">
        <div className="app_container">
          <Feed/>
          <Stats/>
        </div>
      </div>
    
    </div>
  );
}

export default App;
