import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EmployeesProvider } from './store/store'
import { Theme } from './ui/Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeesProvider>
        <Theme>
            <App />
        </Theme>
    </EmployeesProvider>
  </React.StrictMode>
)
