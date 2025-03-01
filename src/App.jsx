import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserInterface } from './userinterface.jsx'

export function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input placeholder='First Name' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
      <input placeholder='Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
      <input placeholder='Age' value={age} onChange={(e) => {
        const age = parseInt(e.target.value || '0')
    
        setAge(age)
        }}/>
      <UserInterface firstName={firstName} lastName={lastName} age={age}/>
    </>
  )
}


