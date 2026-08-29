import { useEffect, useState } from 'react'
import {
  START_DATE, UNLOCK_DATE, DATE_LABEL, TITLE, TAGLINE, NAMES, FOOTER,
} from './config.js'
import { getElapsed } from './elapsed.js'
import {
  IconYears, IconMonths, IconWeeks, IconDays,
  IconHours, IconMinutes, IconSeconds, IconHeart,
} from './Icons.jsx'
import Petals from './Petals.jsx'
import LockButton from './LockButton.jsx'
import Collage from './Collage.jsx'

// Cinta inferior: el resto, como una línea de tiempo
const RIBBON = [
  { key: 'weeks', label: 'semanas', Icon: IconWeeks },
  { key: 'days', label: 'días', Icon: IconDays },
  { key: 'hours', label: 'horas', Icon: IconHours },
  { key: 'minutes', label: 'minutos', Icon: IconMinutes },
  { key: 'seconds', label: 'segundos', Icon: IconSeconds },
]

export default function App() {
  const [now, setNow] = useState(() => new Date())
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => {
      clearInterval(id)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  const unlocked = now.getTime() >= UNLOCK_DATE.getTime()

  if (hash === '#collage' && unlocked) return <Collage />

  const e = getElapsed(START_DATE, now)
  const pad = (n) => String(n).padStart(2, '0')

  return (
    <main className="screen">
      <Petals />

      <section className="card">
        <p className="kicker">
          <IconHeart width={12} height={12} />
          <span>{DATE_LABEL}</span>
          <IconHeart width={12} height={12} />
        </p>
        <h1 className="title">{TITLE}</h1>
        <p className="tagline">{TAGLINE}</p>

        <div className="hero">
          <div className="hero-cell">
            <IconYears className="hero-ico" width={18} height={18} />
            <span className="hero-num">{pad(e.years)}</span>
            <span className="hero-lbl">años</span>
          </div>

          <span className="hero-heart" aria-hidden="true">
            <span className="hh-ring" />
            <span className="hh-glow" />
            <IconHeart className="hh-icon" width={64} height={64} />
          </span>

          <div className="hero-cell">
            <IconMonths className="hero-ico" width={18} height={18} />
            <span className="hero-num">{pad(e.months)}</span>
            <span className="hero-lbl">meses</span>
          </div>
        </div>

        <div className="divider" aria-hidden="true">
          <span /><IconHeart width={14} height={14} /><span />
        </div>

        <ul className="ribbon">
          {RIBBON.map(({ key, label, Icon }) => (
            <li className={`chip${key === 'seconds' ? ' is-seconds' : ''}`} key={key}>
              <Icon className="chip-ico" width={15} height={15} />
              <span className="chip-num">{pad(e[key])}</span>
              <span className="chip-lbl">{label}</span>
            </li>
          ))}
        </ul>

        <LockButton unlockDate={UNLOCK_DATE} />

        <p className="names">
          <IconHeart width={13} height={13} />
          {NAMES}
          <IconHeart width={13} height={13} />
        </p>
        <p className="footer">{FOOTER}</p>
      </section>
    </main>
  )
}
