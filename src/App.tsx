import './App.css';
// import Habit from './components/Habit'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignupForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignupForm />}></Route>
      </Routes>
      {/* <Habit></Habit> */}
    </div>
  );
}

export default App;
