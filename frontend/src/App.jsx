import { useState } from 'react'
import './App.css'
import Form from '../src/components/Form'
import DevOpsSyllabus from './components/Courses/DevOpsSyllabus'

function App() {
  return (
    <>
    <div className='flex w-full h-screen'>
     <div className='w-full flex items-center justify-center'>
     {/* <Form></Form> */}
     <DevOpsSyllabus></DevOpsSyllabus>
     </div>
     <div >
      <div className=''></div>
     </div>
     </div>
    </>
  )
}

export default App
