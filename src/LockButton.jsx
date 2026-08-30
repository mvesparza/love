import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BUTTON_LABEL, COUNTDOWN_LABEL, LOCKED_MESSAGES } from './config.js'
import { IconHeartLock, IconBookHeart, IconHeart } from './Icons.jsx'
import HeartStorm from './HeartStorm.jsx'
import Safe from './Safe.jsx'

// Patrón de vibración del desbloqueo (Android). [vibra, pausa, vibra, ...] en ms.
// Ritmo de latido + subida final; los tiempos coinciden con WAVES de HeartStorm.
const CELEBRATE_VIBE = [
  160, 100, 160, 100, 160, 380,
  160, 100, 160, 100, 160, 380,
  240, 120,
  900,
]
const CELEBRATED_KEY = 'anni-celebrated'

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

export default function LockButton({ unlockDate }) {
  const [now, setNow] = useState(() => Date.now())
  const [balloons, setBalloons] = useState([])
  const [storm, setStorm] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const target = unlockDate.getTime()
  const unlocked = now >= target

  const handled = useRef(false)

  useEffect(() => {
    if (!unlocked || handled.current) return
    handled.current = true

    // celebrar una sola vez por dispositivo (cubre tanto el momento en vivo
    // como la primera visita cuando ya está desbloqueado)
    let already = false
    try { already = localStorage.getItem(CELEBRATED_KEY) === '1' } catch { /* no-op */ }
    if (already) return
    try { localStorage.setItem(CELEBRATED_KEY, '1') } catch { /* no-op */ }

    setStorm(true)

    // Vibración (Android). Los navegadores la bloquean si el usuario aún no ha
    // tocado la página, así que si falla la re-lanzamos en el primer toque.
    let ok = false
    try { ok = navigator.vibrate?.(CELEBRATE_VIBE) === true } catch { /* no-op */ }
    if (!ok && typeof navigator.vibrate === 'function') {
      const buzz = () => { try { navigator.vibrate(CELEBRATE_VIBE) } catch { /* no-op */ } }
      window.addEventListener('pointerdown', buzz, { once: true })
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
    <div className="lock unlocked">
      {storm && (
        <Safe>
          <HeartStorm onDone={() => setStorm(false)} />
        </Safe>
      )}
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
