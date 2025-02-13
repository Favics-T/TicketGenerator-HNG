import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FormProvider } from './Context/FormContext.jsx'

createRoot(document.getElementById('root')).render(
 <FormProvider>
<StrictMode>
    <App />
  </StrictMode>,
 </FormProvider>

  
  
)
