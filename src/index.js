import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import App from './App';
import AppHeader from './components/AppHeader';
import reportWebVitals from './reportWebVitals';
import AboutPage from './components/AboutPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route path="home" element={<App />} />
          <Route path="about" element={<AboutPage />} />
          <Route index element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
