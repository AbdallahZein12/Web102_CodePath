import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Route, Routes} from 'react-router-dom'
import SideNav from './components/sideNav'
import Create from './routes/Create'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<SideNav />}/>
        <Route index={true} element={<App />} />
        <Route path = "/create" index={false} element= {<Create />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
