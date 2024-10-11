import React, { useState } from 'react';

const SignupForm = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username && password) {
        onSignup({ username, password }); // اطمینان از اینکه ورودی‌ها معتبر هستند
      } else {
        console.error("Invalid signup attempt"); // بررسی ورودی‌ها
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
export default SignupForm;