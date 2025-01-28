import './App.css';
import Habit from './Habit'
import SignupForm from './SignupForm';

async function getStuff() {
  const response = await fetch('http://localhost:5000/')
  const json = await response.json()
  return json.msg
}

const homepageText = getStuff()

function App() {
  return (
    <div className="App">
      <h1>{homepageText}</h1>
      <Habit></Habit>
      <SignupForm></SignupForm>
    </div>
  );
}

export default App;
