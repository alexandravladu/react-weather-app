import './App.css'
import Weather from './Weather'

function App() {


  return (
    <div className='App'>
      <div className='container'>
        <h1> Weather App </h1>
        <Weather />
        <button className='btn btn-primary'>Button </button>
        <a href="https://vitejs.dev" target="_blank"> </a>
      </div>
      <p className="read-the-docs">
        This project was created by Alexandra Vladu and it is {" "}
        <a href="https://github.com/alexandravladu/react-weather-app" target="_blank">open-source</a>
      </p>
    </div>
  )
}

export default App
