import './App.css'
import Weather from './Weather'

function App() {


  return (
    <>
      <div>
        <h1> Weather App </h1>
        <Weather />
        <a href="https://vitejs.dev" target="_blank"> </a>
      </div>
      <p className="read-the-docs">
        This project was created by Alexandra Vladu and it is {" "}
        <a href="https://github.com/alexandravladu/react-weather-app" target="_blank">open-source</a>
      </p>
    </>
  )
}

export default App
