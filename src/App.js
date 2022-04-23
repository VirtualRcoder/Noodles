import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Router from './components/Router';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as ROUTER } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json`)
    .then(res=>res.json())
    .then(res=>{
      dispatch({type: "Add", payload: res})
    })
  },[])

  return (
    <div className="App">
      <ROUTER>
        <NavBar/>
        <Router/>
      </ROUTER>
    </div>
  );
}

export default App;
