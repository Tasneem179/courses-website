import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, Route } from "wouter";
import Header from './Components/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import CoursesSection from './Components/Courses/CoursesSection';
import 'bootstrap/dist/css/bootstrap.min.css';


const Router = () => (
  <>
    <Route path="/">{<App/>}</Route>
    <Route path="/dashboard">{<Dashboard/>}</Route>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
