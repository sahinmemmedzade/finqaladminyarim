import React, { useState } from 'react';
import './signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames';

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
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

  const handleSignup = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const userData = await response.json();
        const userId = userData._id; // Kullanıcı ID'sini al
        localStorage.setItem('userId', userId); // Kullanıcı ID'sini local storage'a kaydet
        navigate('/home');
      } else {
        // Hata işlə
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };
  

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            {errors.userName && <div className="error">{errors.userName}</div>}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
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
            <span
              className={classNames("toggle-visibility", { "error-present": errors.password })}
              onClick={togglePasswordVisibility}
            >
              {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group password-group">
            <input
              type={confirmPasswordType}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className={classNames("toggle-visibility", { "error-present": errors.confirmPassword })}
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordType === 'password' ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
          <div className="createbutton">
            <button type="submit" className="create-account-btn">
              Create Account
            </button>
          </div>
        </form>
        <div className="social-signup">
          <div className="google-btn">
            <span className="social-icon">&#x1F603;</span> Continue with Google
          </div>
          <div className="facebook-btn">
            <span className="social-icon">&#x1F603;</span> Continue with Facebook
          </div>
          <span className='passlogin'><Link to="/login">Already have an account? Log In</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
