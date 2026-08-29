import { useEffect, useRef, useState } from 'react'
import { IconLock, IconImages, IconHeart, IconTap } from './Icons.jsx'

// Cuenta regresiva corta hasta el desbloqueo: "2d 04:12:33"
function formatLeft(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const d = Math.floor(s / 86400)
  const h = String(Math.floor((s % 86400) / 3600)).padStart(2, '0')
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0')
  const sec = String(s % 60).padStart(2, '0')
  return `${d}d ${h}:${m}:${sec}`
}

function Burst() {
  return (
    <div className="burst" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * 360 + Math.random() * 14
        const dist = 70 + Math.random() * 80
        const rad = (angle * Math.PI) / 180
        const style = {
          '--tx': `${Math.cos(rad) * dist}px`,
          '--ty': `${Math.sin(rad) * dist}px`,
          '--dur': `${0.7 + Math.random() * 0.6}s`,
          animationDelay: `${Math.random() * 0.25}s`,
        }
        return <IconHeart key={i} className="burst-h" style={style} width={13} height={13} />
      })}
    </div>
  )
}

export default function LockButton({ unlockDate }) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = unlockDate.getTime()
  const unlocked = now >= target

  const wasUnlocked = useRef(unlocked)
  const [burst, setBurst] = useState(false)

  useEffect(() => {
    if (unlocked && !wasUnlocked.current) {
      wasUnlocked.current = true
      setBurst(true)
      try { navigator.vibrate?.([90, 40, 90, 40, 180]) } catch { /* no-op */ }
      const t = setTimeout(() => setBurst(false), 5200)
      return () => clearTimeout(t)
    }
  }, [unlocked])

  if (!unlocked) {
    return (
      <div className="lock locked" role="note" aria-label="Contenido bloqueado">
        <span className="lock-shimmer" aria-hidden="true" />
        <IconLock className="lock-ico" width={22} height={22} />
        <span className="lock-text">una sorpresa te espera</span>
        <span className="lock-sub">se abre en {formatLeft(target - now)}</span>
      </div>
    )
  }

  return (
    <div className={`lock unlocked${burst ? ' is-burst' : ''}`}>
      {burst && <Burst />}
      <a className="lock-btn" href="#collage">
        <span className="lb-rings" aria-hidden="true"><i /><i /><i /></span>
        <span className="lb-shine" aria-hidden="true" />
        <IconImages className="lb-ico" width={20} height={20} />
        <span className="lb-label">Abrir nuestro collage</span>
        <IconHeart className="lb-heart" width={16} height={16} />
      </a>
      <span className="lock-hint">
        <IconTap width={16} height={16} /> ¡toca aquí!
      </span>
    </div>
  )
}
