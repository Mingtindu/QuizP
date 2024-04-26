import { useState } from 'react'
import AddQuizQuestion from './components/AddQuizQuestion'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <AddQuizQuestion></AddQuizQuestion>
     
    </>
  )
}

export default App
