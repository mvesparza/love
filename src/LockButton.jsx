import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BUTTON_LABEL, COUNTDOWN_LABEL, LOCKED_MESSAGES } from './config.js'
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
  const [balloons, setBalloons] = useState([])

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

  const spawnBalloon = () => {
    setBalloons((list) => {
      if (list.length >= 4) return list
      const dx = (Math.random() * 2 - 1) * 130
      const dy = -70 - Math.random() * 170
      const style = {
        '--x': `${16 + Math.random() * 56}vw`,
        '--y': `${28 + Math.random() * 42}vh`,
        '--dx': `${dx}px`,
        '--dy': `${dy}px`,
        '--rot': `${(Math.random() * 2 - 1) * 10}deg`,
        '--dur': `${3 + Math.random() * 1.3}s`,
      }
      const msg = LOCKED_MESSAGES[Math.floor(Math.random() * LOCKED_MESSAGES.length)]
      return [...list, { id: Date.now() + Math.random(), style, msg }]
    })
    try { navigator.vibrate?.(30) } catch { /* no-op */ }
  }

  const dropBalloon = (id) => setBalloons((l) => l.filter((b) => b.id !== id))

  if (!unlocked) {
    const r = getRemaining(target - now)
    return (
      <div className="lock locked" role="note" aria-label="Cuenta regresiva">
        <span className="lock-shimmer" aria-hidden="true" />
        <p className="cd-title">
          <IconHeartLock width={16} height={16} />
          {COUNTDOWN_LABEL}
        </p>
        <div className="cd-grid">
          {CD_UNITS.map(([key, label]) => (
            <div className="cd-cell" key={key}>
              <span className="cd-num">{String(r[key]).padStart(2, '0')}</span>
              <span className="cd-lbl">{label}</span>
            </div>
          ))}
        </div>

        <button type="button" className="lock-btn is-locked" onClick={spawnBalloon}>
          <IconHeartLock className="lb-ico" width={18} height={18} />
          <span className="lb-label">{BUTTON_LABEL}</span>
        </button>

        {createPortal(
          balloons.map((b) => (
            <span
              key={b.id}
              className="balloon"
              style={b.style}
              onAnimationEnd={() => dropBalloon(b.id)}
            >
              {b.msg}
            </span>
          )),
          document.body,
        )}
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
