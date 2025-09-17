import Form from './Form'
import ColorList from './ColorList'
import React from 'react'
import Values from 'values.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // 引入樣式

const App = () => {
  const [color, setColor] = useState(new Values('#f15025').all(10))

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColor(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={color} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
