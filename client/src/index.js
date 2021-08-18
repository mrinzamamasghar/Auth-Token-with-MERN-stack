import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Login from './Components/LoginPage/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home/Home';
import history from './Components/History/History';
import About from './Components/About/About';


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
      <Route path="/" exact><RegisterPage/> </Route>
      <Route path="/login" ><Login/></Route>
      <Route path="/home" ><Home/></Route>
      <Route path="/about" ><About/></Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
