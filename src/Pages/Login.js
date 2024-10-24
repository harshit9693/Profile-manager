import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to hold the user's email and password entered in the form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook to navigate programmatically between routes
  const navigate = useNavigate();

  // Function to handle the form submission when the user tries to log in
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from refreshing the page by default

    // Retrieve user data stored during registration from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the email and password entered match the stored user data
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // If email and password match, navigate to the account page
      alert('Login successful');
      navigate('/account');  // Navigate to account page on successful login
    } else {
      // If credentials don't match, display an error message
      alert('Invalid email or password');
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      
      {/* Form submission handled by handleSubmit function */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}  // Controlled input bound to state
            onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
            required  // Mark input as required
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}  // Controlled input bound to state
            onChange={(e) => setPassword(e.target.value)}  // Update password state on input change
            required  // Mark input as required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {/* Registration link for new users */}
      <p className="mt-3">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
