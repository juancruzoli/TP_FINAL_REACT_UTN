import React from 'react'
import ContactScreen from './contacts/ContactScreen'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import ChatScreen from './Messages/messages/ChatScreen'
import './App.css'

function App() {
  return (
<>
  <Routes>
    <Route path="/" 
          element={<ContactScreen />} 
          />
    <Route path="/contact/:contact_id/messages" 
          element={<ChatScreen />} 
          />
  </Routes> 


</>
  )
}

export default App
