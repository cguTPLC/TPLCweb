import './App.css';
import Bar from './components/bar.js'
import Content from './components/content.js'
import Footer from './components/footer.js'
import { BrowserRouter as Router} from 'react-router-dom'
//import Background from './bg.js'

function App() {
  return (
    <div className="app">
      <Router>
        <Bar/>
        <Content/>
      </Router>

      <Footer/>
    </div>
  );
}

export default App; 
