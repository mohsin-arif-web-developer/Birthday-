import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <h1>BSSE7 React Lab</h1>
        <p className="subtitle">Vite + React Starter Project</p>
      </header>
      
      <main className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </main>

      <footer className="footer">
        <p>Ready to run with <code>npm install</code> and <code>npm run dev</code></p>
      </footer>
    </div>
  )
}

export default App