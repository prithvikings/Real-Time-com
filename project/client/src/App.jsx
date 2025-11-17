import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const App = () => {
  const socket = io('http://localhost:3000')

  useEffect(()=>{
    socket.on('connect', () => {
    console.log('Connected to server with ID:', socket.id)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected from server')
  })
  },[])
  
  return (
    <div className="min-h-screen w-full p-4 bg-zinc-400">App</div>
  )
}

export default App
