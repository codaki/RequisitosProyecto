import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContexProvider } from './context/authContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='257194735224-er01s6s69lk6616ia9adkldqtc38apbt.apps.googleusercontent.com'>
    <React.StrictMode>
      <AuthContexProvider>
        <App />
      </AuthContexProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
