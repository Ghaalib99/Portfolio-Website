// import logo from './logo.svg';
import './App.css';
// import { useMediaQuery } from 'react-responsive'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
    

  return (
    <div className="App">
     
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
