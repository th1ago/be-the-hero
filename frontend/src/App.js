import React from 'react';
import './global.css'
import Routes from './routes'

function App() {
    return (
      <div>
        <Routes />
      </div>
    );
  }

export default App;

// MEU APRENDIZADO
// import React, {useState} from 'react';
// import Header from './Header';
// function App() {
//   // Array [ valor, funcaoDeAlterarValor]
//   let [counter, setCounter] = useState(0);
//   function increment(){
//     setCounter(counter++);
//   }
//   function erase(){
//     setCounter(counter = 0);
//   }
//   return (
//     <div>
//       <Header>Contador {counter}</Header>
//       <button onClick={increment}>Incrementar</button>
//       <button onClick={erase}>Zerar</button>
//     </div>
//   );
// }