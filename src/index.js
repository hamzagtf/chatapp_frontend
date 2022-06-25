import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './component/navbar';
import MainPage from './component/main_page';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  Home from './component/home'
import 'bootstrap/dist/css/bootstrap.css'
import Friend_list from './component/friend_list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Router>
    <Navbar />
      <div className='container-fluid' style={{paddingTop:'4rem'}}>
        
        <Switch>
          <Route exact path="/" >
              <Home  />

            </Route>
          <Route  path="/home/:id?" >
              <Home  />

          </Route>
          <Route  path="/friend_list/:id?" >
              <Friend_list  />

          </Route>

          <Route path="/messages/:id" >
              <MainPage />

          </Route>
        </Switch>
      </div>
        
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
