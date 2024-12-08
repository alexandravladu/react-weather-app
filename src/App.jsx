/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import NewWeather from './Weather';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className="title"> Weather App </h1>
        <br />
        <NewWeather defaultCity="London"/>
      </div>
      <footer>
        This project was created by Alexandra Vladu and it is {" "}
        <a href="https://github.com/alexandravladu/react-weather-app" target="_blank" rel="noreferrer">open-source</a> and hosted on <a href="https://soft-meerkat-5f05ce.netlify.app/" target="_blank" rel="noreferrer">Netlify.</a>
      </footer>
    </div>
  )
}

export default App;
