import { IconHeart } from './Icons.jsx'

// Corazones cayendo de fondo (decorativo)
export default function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <IconHeart key={i} className={`petal p${i}`} width={18} height={18} />
      ))}
    </div>
  )
}
