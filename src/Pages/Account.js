import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  // State to hold the user information
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '' });
  
  // State to track which field is being edited (null if no field is being edited)
  const [editingField, setEditingField] = useState(null);
  
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);  
  
  // useNavigate hook to programmatically navigate between routes
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the user data from localStorage when the component loads
    const savedUser = JSON.parse(localStorage.getItem('user'));
    
    // If user data exists, set it in state, otherwise redirect to login
    if (savedUser) {
      setUser(savedUser);
    } else {
      // Redirect to login if no user is found
      navigate('/');
    }
  }, [navigate]);

  // Function to handle the update when the user saves changes to their account
  const handleUpdate = (e) => {
    e.preventDefault();  // Prevent form default submission behavior
    
    // Update user data in localStorage to persist changes
    localStorage.setItem('user', JSON.stringify(user));
    
    // Notify the user of successful update
    alert('Account updated successfully');
    
    // Stop editing mode after update by setting editingField to null
    setEditingField(null);  
  };

  // Function to handle logout, clearing user data from localStorage and redirecting to login
  const handleLogout = () => {
    localStorage.removeItem('user');  // Remove user from localStorage
    alert('Logged out successfully');
    navigate('/');  // Redirect to login page
  };

  // Function to toggle password visibility (show/hide password)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  // Toggle state between true and false
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Account Information</h2>
      
      <form onSubmit={handleUpdate}>
        {/* Name Field */}
        <div className="form-group">
          <label>Name</label>
          {/* Conditionally render input field for name based on whether the user is editing */}
          {editingField === 'name' ? (
            <div className="input-group">
              {/* Input field for name with save button */}
              <input
                type="text"
                className="form-control"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-group">
              {/* Display current name and 'Edit' button when not editing */}
              <input
                type="text"
                className="form-control"
                value={user.name}
                disabled
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditingField('name')}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Email Field - Cannot be edited */}
        <div className="form-group">
          <label>Email (Cannot be changed)</label>
          {/* Email input field is disabled because email can't be edited */}
          <input
            type="email"
            className="form-control"
            value={user.email}
            disabled
          />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label>Phone Number</label>
          {/* Conditionally render input field for phone number based on editing state */}
          {editingField === 'phone' ? (
            <div className="input-group">
              {/* Input field for phone number with save button */}
              <input
                type="tel"
                className="form-control"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                required
              />
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-group">
              {/* Display current phone number and 'Edit' button */}
              <input
                type="tel"
                className="form-control"
                value={user.phone}
                disabled
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditingField('phone')}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password</label>
          {/* Conditionally render input field for password based on editing state */}
          {editingField === 'password' ? (
            <div className="input-group">
              {/* Input field for password with show/hide toggle */}
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              {/* Button to toggle password visibility */}
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {/* Save button for password */}
              <button
                type="button"
                className="btn btn-success"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="input-group">
              {/* Display masked password and 'Edit' button */}
              <input
                type="password"
                className="form-control"
                value={user.password}
                disabled
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditingField('password')}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </form>

      {/* Logout Button */}
      <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Account;
