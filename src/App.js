import './App.css';
import Form from './Form';
import { useState } from 'react';
import Results from './Results';

function App() {
  const [connections, setConnections] = useState([]);

  const fetchData = ({ from, to }) => {
    fetch(`http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`)
      .then((res) => res.json())
      .then((data) => {
        setConnections(data.connections);
        console.log(data);
      });
  };

  return (
    <div className='App'>
      <Form fetchData={fetchData} />
      <Results connections={connections} />
    </div>
  );
}

export default App;
