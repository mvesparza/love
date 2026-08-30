import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Safe from './Safe.jsx'
import { NAMES } from './config.js'
import './styles.css'

// Pantalla mínima si algo se rompiera de raíz (nunca debería pasar).
const Fallback = (
  <main className="screen">
    <section className="card" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <h1 className="title">{NAMES}</h1>
      <p className="tagline" style={{ marginTop: 12 }}>
        recarga la página, por favor
      </p>
    </section>
  </main>
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Safe fallback={Fallback}>
      <App />
    </Safe>
  </React.StrictMode>,
)
