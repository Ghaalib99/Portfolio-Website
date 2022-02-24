import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
    const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1224px)'
    })
    const isLarge = useMediaQuery({ query: '(min-width: 1824px)' })
    const isMedium = useMediaQuery({ query: '(max-width: 1224px)' })
    const issmall = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div className="Appw-full flex flex-wrap h-full">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Sidebar />
      {/* {isBigScreen && <Main />} */}
      <Main />
    </div>
  );
}

export default App;
