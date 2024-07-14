import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import ErrorMsg from './components/ErrorPage.jsx';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Header />
      <Outlet />
      
    </div>
  );
}

export default App;
