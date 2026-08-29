import { IconStethoscope, IconLaptop, IconSunflower, IconHeart } from './Icons.jsx'

// Iconos (estetoscopio · laptop · girasol · corazón) flotando de fondo en el feed.
const SEQ = [IconStethoscope, IconLaptop, IconSunflower, IconHeart]

export default function FloatIcons({ count = 24 }) {
  return (
    <div className="floaties" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const Icon = SEQ[i % SEQ.length]
        return <Icon key={i} className={`floatie f${i % 24}`} width={20} height={20} />
      })}
    </div>
  )
}
