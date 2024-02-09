import React, { useState, useEffect } from 'react';
import './myStyle.css'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Title = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); 

  const change = () => {
    setCount(2); 
  };
  

  return (
    <>
      <h1>GOPI</h1>
      <ul>
        <li onClick={change}>Introduction</li>
        <li>Basics</li>
        <li>ReactJs</li>
      </ul>
     
      <ExampleComponent count={count} setCount={setCount} />
    </>
  );
};

const ExampleComponent = ({ count, setCount }) => {
  // Define state and handlers for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <h2>Visit the Home Page</h2> 
      </div>
      {count === 2 && (
        <div>
          <h2>Welcome to this Learning React Js</h2>
          {/* Login form */}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </div>
      )}

    </>
  );
}

export default Title;
