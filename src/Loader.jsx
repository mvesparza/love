import { useEffect } from 'react'
import { LOADER_TEXT, PHOTOS } from './config.js'
import { IconStethoscope, IconLaptop, IconHeart } from './Icons.jsx'

const BASE = import.meta.env.BASE_URL

// Pantalla de carga (~4.5s) antes del feed: estetoscopio + laptop girando.
export default function Loader() {
  // adelanta la descarga de las primeras fotos mientras se ve el loader
  useEffect(() => {
    PHOTOS.slice(0, 3).forEach((p) => {
      const img = new Image()
      img.src = BASE + p.src
    })
  }, [])

  return (
    <div className="loader">
      <div className="loader-orbit">
        <span className="lo-ring" aria-hidden="true" />
        <IconHeart className="lo-heart" width={30} height={30} />
        <span className="lo-sat lo-sat-a">
          <IconStethoscope width={22} height={22} />
        </span>
        <span className="lo-sat lo-sat-b">
          <IconLaptop width={22} height={22} />
        </span>
      </div>
      <p className="loader-text">{LOADER_TEXT}</p>
      <span className="loader-bar" aria-hidden="true"><i /></span>
    </div>
  )
}
