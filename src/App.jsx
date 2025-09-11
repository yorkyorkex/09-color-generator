import Form from './Form'
import ColorList from './ColorList'
import React from 'react'
import Values from 'values.js'
import { useState } from 'react'
const App = () => {
  const [color, setColor] = useState(new Values('#f15025').all(10))

  return (
    <main>
      <Form />
      <ColorList colors={color} />
    </main>
  )
}
export default App
