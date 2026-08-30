import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconHeart } from './Icons.jsx'

// Oleadas de corazones. `at` = ms desde el inicio; coincide con el inicio de
// cada pulso del patrón de vibración (ver CELEBRATE_VIBE en LockButton).
const WAVES = [
  { at: 0, n: 10 },
  { at: 260, n: 10 },
  { at: 520, n: 12 },
  { at: 1060, n: 12 },
  { at: 1320, n: 12 },
  { at: 1580, n: 14 },
  { at: 2120, n: 16 },
  { at: 2480, n: 40 }, // final: lluvia grande
]
// margen para que hasta el corazón más lento termine su animación (2480 + 180 delay + 5980 dur)
const LIFE_MS = 8900

function makeHeart(id) {
  const size = 14 + Math.random() * 24
  return {
    id,
    tone: id % 3,
    style: {
      left: `${Math.random() * 100}vw`,
      width: `${size}px`,
      height: `${size}px`,
      '--sway': `${(Math.random() * 2 - 1) * 64}px`,
      '--rise': `${88 + Math.random() * 34}vh`,
      '--rot': `${(Math.random() * 2 - 1) * 44}deg`,
      '--dur': `${3.4 + Math.random() * 2.4}s`,
      animationDelay: `${Math.random() * 0.18}s`,
    },
  }
}

export default function HeartStorm({ onDone }) {
  const [hearts, setHearts] = useState([])
  const [pulse, setPulse] = useState(false)
  const doneRef = useRef(onDone)
  doneRef.current = onDone

  useEffect(() => {
    let count = 0
    const timers = []
    let life = LIFE_MS
    try {
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) life = 2800
    } catch { /* no-op */ }

    WAVES.forEach((w) => {
      timers.push(
        setTimeout(() => {
          setPulse(true)
          timers.push(setTimeout(() => setPulse(false), 190))
          setHearts((prev) =>
            prev.concat(Array.from({ length: w.n }, () => makeHeart(count++))),
          )
        }, w.at),
      )
    })

    timers.push(setTimeout(() => doneRef.current?.(), life))
    return () => timers.forEach(clearTimeout)
  }, [])

  const remove = (id) => setHearts((prev) => prev.filter((x) => x.id !== id))

  return createPortal(
    <div className="heartstorm" aria-hidden="true">
      <div className={`hs-glow${pulse ? ' is-pulse' : ''}`} />
      {hearts.map((h) => (
        <IconHeart
          key={h.id}
          className={`hs-heart hs-t${h.tone}`}
          style={h.style}
          onAnimationEnd={() => remove(h.id)}
        />
      ))}
    </div>,
    document.body,
  )
}
