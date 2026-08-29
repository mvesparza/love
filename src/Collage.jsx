import { useEffect, useRef, useState } from 'react'
import { PHOTOS, NAMES, FEED_TITLE, FEED_INTRO, FEED_OUTRO, FEED_ANNIVERSARY } from './config.js'
import { IconHeart, IconArrowLeft, IconSunflower } from './Icons.jsx'
import FloatIcons from './FloatIcons.jsx'
import Loader from './Loader.jsx'

const BASE = import.meta.env.BASE_URL
const LOADER_MS = 4500

// convierte **texto** en <strong>texto</strong>
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((seg, i) =>
    seg.startsWith('**') && seg.endsWith('**')
      ? <strong key={i}>{seg.slice(2, -2)}</strong>
      : seg,
  )
}

function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect() } },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, shown]
}

function Post({ photo }) {
  const [ref, shown] = useReveal()
  return (
    <article ref={ref} className={`post${shown ? ' is-in' : ''}`}>
      <span className="post-node" aria-hidden="true" />
      <p className="post-date">{photo.date}</p>
      <figure className="post-photo">
        <img
          src={BASE + photo.src}
          alt={photo.date}
          width={photo.w}
          height={photo.h}
          loading="lazy"
          decoding="async"
        />
      </figure>
      {photo.story && (
        <p className="post-story">
          <IconHeart className="post-heart" width={14} height={14} />
          <span>{photo.story}</span>
        </p>
      )}
    </article>
  )
}

function Feed() {
  const [introRef, introShown] = useReveal()
  const [outroRef, outroShown] = useReveal()

  return (
    <div className="feed">
      <FloatIcons count={24} />

      <header className="feed-top">
        <a className="feed-back" href="#" aria-label="Volver">
          <IconArrowLeft width={18} height={18} />
        </a>
        <span className="feed-title">{FEED_TITLE}</span>
        <span aria-hidden="true" />
      </header>

      <main className="feed-line">
        <section ref={introRef} className={`feed-note is-intro${introShown ? ' is-in' : ''}`}>
          <IconHeart width={20} height={20} />
          <p>{FEED_INTRO}</p>
        </section>

        {PHOTOS.map((p, i) => (
          <Post key={i} photo={p} />
        ))}

        <section ref={outroRef} className={`feed-note is-outro${outroShown ? ' is-in' : ''}`}>
          <IconSunflower width={22} height={22} />
          {FEED_OUTRO.split('\n\n').map((par, i) => (
            <p key={i}>{rich(par)}</p>
          ))}
          <p className="feed-anniversary">{FEED_ANNIVERSARY}</p>
          <span className="feed-sign">{NAMES}</span>
        </section>
      </main>
    </div>
  )
}

export default function Collage() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_MS)
    return () => clearTimeout(t)
  }, [])
  return loading ? <Loader /> : <Feed />
}
