import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task1 from './Task/Task1';
import Task2 from './Task/Task2';
import Task3 from './Task/Task3';
import Task4 from './Task/Task4';
import Task5 from './Task/Task5';
import Task6 from './Task/Task6';
import Task7 from './Task/Task7';
import Task8 from './Task/Task8';
import Task9 from './Task/Task9';
import Task10 from './Task/Task10';
import Task11 from './Task/Task11';
import Task12 from './Task/Task12';
import Mini1 from './MiniProjects/Mini1';
import Mini2 from './MiniProjects/Mini2';
import Task13parent from './Task/Task13parent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>
    <Task6/>
    <Task7/>
    <Task8/>
    <Task9/>
    <Task10/>
    <Task11/>
    <Task12/>
    <Task13parent/>
    <Mini1/>
    <Mini2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
