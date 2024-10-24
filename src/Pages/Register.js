import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // State to hold user's name, email, phone number, and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Hook to navigate programmatically between routes
  const navigate = useNavigate();

  // Function to handle form submission for user registration
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    // Create a user object to store in localStorage
    const newUser = {
      name,
      email,
      phone,
      password,
    };

    // Store user information in localStorage (for demo purposes)
    localStorage.setItem('user', JSON.stringify(newUser));

    // Navigate to the login page after successful registration
    alert('Registration successful! Please log in.');
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Register</h2>
      
      {/* Form submission handled by handleSubmit function */}
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}  // Controlled input bound to name state
            onChange={(e) => setName(e.target.value)}  // Update name state on input change
            required  // Mark input as required
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}  // Controlled input bound to email state
            onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
            required  // Mark input as required
          />
        </div>

        {/* Phone Number Input */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            className="form-control"
            value={phone}  // Controlled input bound to phone state
            onChange={(e) => setPhone(e.target.value)}  // Update phone state on input change
            required  // Mark input as required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}  // Controlled input bound to password state
            onChange={(e) => setPassword(e.target.value)}  // Update password state on input change
            required  // Mark input as required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      {/* Login link for users who already have an account */}
      <p className="mt-3">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
