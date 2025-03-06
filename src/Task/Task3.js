import React from 'react'

function Task3() {
  return (
    <>
    <h1 style={{textAlign:'center'}}>Task 3</h1>
    <h1 style={{textAlign:'center'}}>React Ecosystem</h1>
   
        <h2>1. ReactDOM</h2>
        <p>
            <strong>ReactDOM</strong> is a package that provides DOM-specific methods for rendering React components into the browser's DOM. It acts as the glue between React and the DOM.
        </p>
        <p>
            The most commonly used method is <code>ReactDOM.render()</code>, which renders a React component into a specified DOM element.
        </p>
       
        <p>
            In the example above, the <code>App</code> component is rendered into the DOM element with the ID <code>root</code>.
        </p>
   
        <h2>2. JSX (JavaScript XML)</h2>
        <p>
            <strong>JSX</strong> is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React code more readable and easier to write.
        </p>
        <p>
            JSX is not valid JavaScript, so it needs to be transpiled into regular JavaScript using tools like Babel.
        </p>
       
        <p>
            Under the hood, JSX is transformed into <code>React.createElement()</code> calls:
        </p>
        <h2>3. Components</h2>
        <p>
            <strong>Components</strong> are the building blocks of a React application. They are reusable, self-contained pieces of code that define how a part of the UI should look and behave.
        </p>
        <p>
            There are two types of components in React:
        </p>
        <ul>
            <li><strong>Functional Components</strong>: Simple JavaScript functions that return JSX.</li>
            <li><strong>Class Components</strong>: ES6 classes that extend <code>React.Component</code> and include a <code>render()</code> method.</li>
        </ul>
       
        <p>
            Components can be nested, reused, and composed to build complex UIs. They accept inputs called <strong>props</strong> (properties) and can maintain their own state using <strong>useState</strong> (in functional components) or <strong>this.state</strong> (in class components).
        </p>
        <hr></hr>
    </>
  )
}

export default Task3