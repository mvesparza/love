import { PHOTOS, NAMES } from './config.js'
import { IconHeart, IconArrowLeft } from './Icons.jsx'
import Petals from './Petals.jsx'

const BASE = import.meta.env.BASE_URL

export default function Collage() {
  return (
    <main className="screen">
      <Petals />

      <section className="card collage">
        <a className="back" href="#">
          <IconArrowLeft width={16} height={16} /> volver
        </a>

        <p className="kicker">
          <IconHeart width={12} height={12} />
          <span>{NAMES}</span>
          <IconHeart width={12} height={12} />
        </p>
        <h1 className="title">Nuestro collage</h1>
        <p className="tagline">un año de momentos</p>

        <div className="photos">
          {PHOTOS.map((p, i) => (
            <figure className="photo" key={i}>
              <img
                src={BASE + p.src}
                alt={p.caption || `Foto ${i + 1}`}
                loading="lazy"
                onError={(e) => e.currentTarget.closest('.photo').classList.add('is-empty')}
              />
              <span className="photo-ph" aria-hidden="true">
                <IconHeart width={26} height={26} />
              </span>
              {p.caption && <figcaption>{p.caption}</figcaption>}
            </figure>
          ))}
        </div>

        <p className="collage-note">
          Pon tus fotos en <code>public/fotos/</code> y ajústalas en <code>src/config.js</code>
        </p>
      </section>
    </main>
  )
}
