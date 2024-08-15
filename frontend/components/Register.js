import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setRegistered }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/register', { name, email });
      setRegistered(true);
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
