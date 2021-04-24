import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/index';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
}

export default App;
