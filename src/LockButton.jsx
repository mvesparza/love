import { useEffect, useRef, useState } from 'react'
import { BUTTON_LABEL } from './config.js'
import { IconHeartLock, IconBookHeart, IconHeart } from './Icons.jsx'

// Tiempo restante hasta `target` desglosado en días/horas/min/seg
function getRemaining(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

const CD_UNITS = [
  ['days', 'días'],
  ['hours', 'horas'],
  ['minutes', 'min'],
  ['seconds', 'seg'],
]

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
    const r = getRemaining(target - now)
    return (
      <div className="lock locked" role="note" aria-label="Cuenta regresiva">
        <span className="lock-shimmer" aria-hidden="true" />
        <p className="cd-title">
          <IconHeartLock width={16} height={16} />
          nuestro día se acerca
        </p>
        <div className="cd-grid">
          {CD_UNITS.map(([key, label]) => (
            <div className="cd-cell" key={key}>
              <span className="cd-num">{String(r[key]).padStart(2, '0')}</span>
              <span className="cd-lbl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`lock unlocked${burst ? ' is-burst' : ''}`}>
      {burst && <Burst />}
      <a className="lock-btn" href="#collage">
        <span className="lb-rings" aria-hidden="true"><i /><i /><i /></span>
        <span className="lb-shine" aria-hidden="true" />
        <IconBookHeart className="lb-ico" width={20} height={20} />
        <span className="lb-label">{BUTTON_LABEL}</span>
        <IconHeart className="lb-heart" width={16} height={16} />
      </a>
    </div>
  )
}
