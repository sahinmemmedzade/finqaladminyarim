import React from 'react';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineRefresh } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    identifier: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({
    identifier: '',
    password: '',
  });

  const [passwordType, setPasswordType] = React.useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: '',
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/home');
      } else {
        const errorData = await response.json();
        if (errorData.error.includes("User not found") || errorData.error.includes("Invalid password")) {
          alert('Email, username or password is wrong');
        }

        if (errorData.error.includes("Email") || errorData.error.includes("Password")) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            identifier: errorData.error,
          }));
        }
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form"> 
<div className='refresh'>  <MdOutlineRefresh />
<Link to="/login/resendpassword">Refresh password </Link> </div>   

        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email or Username"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
            {errors.identifier && <div className="error">{errors.identifier}</div>}
          </div>
          <div className="form-group password-group">
            <input
              type={passwordType}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="toggle-visibility" onClick={togglePasswordVisibility}>
              {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="createbutton">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          <div className='passsignup'>
            <Link to="/signup">Don't you have an account? Signup</Link>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
