import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      try {
        const response = await fetch(`http://localhost:4000/client/${username}`);
        const resp = await response.json();
  
        if (!resp.username || resp.username !== username) {
          toast.error('Enter a valid username');
        } else {
          if (resp.password === password) {
            toast.success('Login successful');
            navigate('/');
          } else {
            toast.error('Invalid password. Please enter valid information');
          }
        }
      } catch (error) {
        toast.error(`Login failed due to ${error.message}`);
      }
    }
  };
  
  const validate = () => {
    let result = true;

    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter a username');
    }

    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter a password');
    }

    return result;
  };

  return (
    <div className='col-6 container my-5'>
      <form onSubmit={handleLogin}>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Username
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='form-control'
              id='inputEmail3'
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
            Password
          </label>
          <div className='col-sm-10'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-control'
              id='inputPassword3'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <button type='submit' className='btn btn-primary align-content-center'>
              Sign in
            </button>
            <button type='button' className='btn btn-primary align-content-center' onClick={() => navigate('/register')}>
              New User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
