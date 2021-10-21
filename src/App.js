import './App.css';
import Bar from './components/bar.js'
import Content from './components/content.js'

import { BrowserRouter as Router} from 'react-router-dom'
//import Background from './bg.js'

function App() {
  return (
    <div className="app">
      <Router>
        <Bar/>
        <Content/>
      </Router>
    </div>
  );
}

export default App; 
