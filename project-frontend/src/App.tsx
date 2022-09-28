import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cidades from './components/Cidades'
import Estados from './components/Estados';
import Prefeitos from './components/Prefeitos';

function App() {
  const [topic, setTopic] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setTopic(1)}>Cidades</button>
      <button onClick={() => setTopic(2)}>Estados</button>
      <button onClick={() => setTopic(3)}>Prefeitos</button>
      {topic === 1 && <Cidades />}
      {topic === 2 && <Estados />}
      {topic === 3 && <Prefeitos />}
    </div>
  )
}

export default App
