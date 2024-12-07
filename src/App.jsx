import './App.css'
// import Weather from './Weather';
import NewWeather from './NewWeather';

function App() {


  return (
    <div className='App'>
      <div className='container'>
        <h1> Weather App </h1>
        <br />
        <NewWeather defaultCity="London"/>
      </div>
      <footer>
        This project was created by Alexandra Vladu and it is {" "}
        <a href="https://github.com/alexandravladu/react-weather-app" target="_blank">open-source</a> and hosted on <a href="https://soft-meerkat-5f05ce.netlify.app/" target="_blank">Netlify.</a>
      </footer>
    </div>
  )
}

export default App;
