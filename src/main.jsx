import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-czd3zkh20ej4rzuz.us.auth0.com"
  clientId="zUC0MQx3axha8GwVbiJ7uxaxyIKfNbnN"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
  </Auth0Provider>
)
