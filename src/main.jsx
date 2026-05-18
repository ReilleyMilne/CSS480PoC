import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home.jsx'
import ThingsToRead from './ThingsToRead.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/CSS480PoC/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToRead />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
