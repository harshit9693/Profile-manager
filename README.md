# User Account Management App

Welcome to the User Account Management App! This is a straightforward React application that provides a user-friendly interface for managing user accounts. Users can register, log in, and edit their personal information securely. The app is designed with simplicity in mind, utilizing Bootstrap for responsive design and smooth user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)


## Features

- **User Registration**: 
  - Users can create an account by providing their name, email, phone number, and password.
  - Registration form includes basic validation to ensure all fields are filled correctly.

- **User Login**: 
  - Users can log in with their registered email and password.
  - Upon successful login, users are redirected to their account management page.

- **Account Management**: 
  - Users can view their personal information after logging in.
  - Users have the ability to edit their name, phone number, and password.
  - A password visibility toggle is available for convenience.

- **Responsive Design**: 
  - The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

- **Local Storage**: 
  - User data is stored in the browser's local storage for simplicity in this demo version. This means user data will persist even after a page refresh.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **React Router**: Used for navigation and routing between different pages within the app.
- **Bootstrap**: A popular CSS framework that provides pre-styled components, making it easier to build responsive layouts.
- **Local Storage**: A web storage feature that allows the app to save data in the user's browser.

## File Structure

```plaintext
Profile-manager/
├── public/
│   ├── index.html            # Main HTML file
│   └── favicon.ico           # Favicon for the app
├── src/
│   ├── components/           # Contains React components
│   │   ├── Account.js        # Account management component
│   │   ├── Login.js          # Login component
│   │   └── Register.js       # Registration component
│   ├── App.js                # Main application component that manages routing
│   ├── index.js              # Entry point of the application
│   └── App.css               # CSS styles for the application
├── package.json              # Project metadata and dependencies
└── README.md                 # Documentation for the project

```

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshit9693/Profile-manager.git

2. **Install dependencies**:
   Make sure you have Node.js and npm installed. Then run the following command to install the necessary packages:
   ```bash
   npm install 
  
3. **Start the application**:
  After the dependencies are installed, start the development server:
  ```bash
  npm start


