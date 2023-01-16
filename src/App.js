import './App.css';
import Form from './Form';
import { useState } from 'react';
import Results from './Results';
import { weatherDump } from './weatherDump';

function App() {
  // TODO: link with maps link on station name

  // TODO: remove empty array
  const [connections, setConnections] = useState([]);
  const [weather, setWeather] = useState(weatherDump);

  const fetchData = ({ from, to }) => {
    fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        setConnections(data.connections);
        console.log(data);
        // fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?lat=${data.from.coordinate.x}&lon=${data.from.coordinate.y}&appid=${weatherKey}`
        // )
        //   .then((resW) => resW.json())
        //   .then((dataW) => {
        //     console.log(dataW);
        //   });
      });
  };

  return (
    <div className='App'>
      <Form fetchData={fetchData} />
      <Results connections={connections} weather={weather} />
    </div>
  );
}

export default App;
