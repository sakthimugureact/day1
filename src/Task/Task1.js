import React from 'react'

function Task1() {
  return (
    <>
     <h1 style={{textAlign:'center'}}>Task 10</h1>
      <h1>Introduction</h1>
    <p>React is a popular JavaScript library for building user interfaces, particularly for single-page applications where you need a fast, interactive user experience. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.</p>
    <h2>Key Concepts of React</h2>
    <h3>1.Components:</h3>
    <li>React applications are made up of components. A component is a self-contained module that renders some output. Components can be nested, reused, and managed independently.</li>
    <li>There are two types of components: <b>Functional Components</b> and <b>Class Components.</b></li>
    <h4><li>Functional Components:</li></h4>
    <p>These are simple JavaScript functions that return JSX (JavaScript XML).</p>
    <h4><li>Class Components:</li></h4>
    <p>These are ES6 classes that extend React.Component and must include a render() method.</p>
    <h3>2.JSX (JavaScript XML):</h3>
    <li>JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML structures in the same file that contains JavaScript code.</li>
    <h3>3.Props (Properties):</h3>
    <li>Props are read-only attributes that are passed to components. They are used to pass data from one component to another.</li>
    <h3>4.State:</h3>
    <li>State is a built-in React object that is used to contain data or information about the component. Unlike props, state can be changed within the component.</li>
    <h3>5.Hooks:</h3>
    <li>Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.</li>
    <li>Common hooks include useState, useEffect, and useContext.</li>
    <h3>6.Virtual DOM:</h3>
    <li>React uses a virtual DOM to optimize rendering. Instead of directly manipulating the browser's DOM, React creates a virtual DOM in memory, where it performs all the necessary manipulations before making the changes in the real DOM. This leads to better performance and a smoother user experience.</li>
    <h3>7.Lifecycle Methods:</h3>
    <li>Class components have lifecycle methods that allow you to run code at particular times in the component's life. Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.</li>
    <hr></hr>
    </>
  )
}

export default Task1