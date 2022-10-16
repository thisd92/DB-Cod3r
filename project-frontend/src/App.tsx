import { useState } from 'react'
import './App.css'
import { Cidades } from './components/Cidade'
import { Estados } from './components/Estado';
import { Prefeitos } from './components/Prefeito';

function App() {
  const [topic, setTopic] = useState(0);

  return (
    <div className="App">
      <button className={topic == 1 ? 'active' : ''} onClick={() => setTopic(1)}>Cidades</button>
      <button className={topic == 2 ? 'active' : ''} onClick={() => setTopic(2)}>Estados</button>
      <button className={topic == 3 ? 'active' : ''} onClick={() => setTopic(3)}>Prefeitos</button>
      {topic === 1 && <Cidades />}
      {topic === 2 && <Estados />}
      {topic === 3 && <Prefeitos />}
    </div>
  )
}

export default App
