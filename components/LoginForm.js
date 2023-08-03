import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the actual login authentication here.
    // For simplicity, we'll assume the login is successful if the username and password are not empty.
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username, password);
    } else {
      alert('Please enter valid credentials.'); // Add proper error handling here.
    }

    // Reset the form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <div className="input">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
}
