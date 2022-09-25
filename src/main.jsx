import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { EmployeesProvider } from './store/store'
import { Theme } from './ui/Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <EmployeesProvider>
        <BrowserRouter>
            <Theme>
                <App />
            </Theme>
        </BrowserRouter>
    </EmployeesProvider>
//   </React.StrictMode>
)
