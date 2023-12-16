// import React and useState from 'react'; // If you're using these, make sure to uncomment this line
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from "./services/authService"
import Routes from './Routes'

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
