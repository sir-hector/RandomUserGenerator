import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Person from './Person';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onClickHandler = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setUserData(data.results[0])
      console.log(data.results[0])
      setLoading(false)
    })
    .finally(()=> {
      setLoading(false)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Random User Generator App</h2>
        <button onClick={onClickHandler}> GET USER </button>
        <Person data={userData}></Person>
      </header>
      
    
      
    </div>
  );
}

export default App;
