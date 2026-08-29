// Iconos de línea estilo Lucide (stroke = currentColor). Sin dependencias.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconYears(p) {
  return (
    <svg {...base} {...p}>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  )
}

export function IconMonths(p) {
  return (
    <svg {...base} {...p}>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M17 14l-5 5-3-3" />
    </svg>
  )
}

export function IconWeeks(p) {
  return (
    <svg {...base} {...p}>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M7 14h10" />
    </svg>
  )
}

export function IconDays(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function IconHours(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function IconMinutes(p) {
  return (
    <svg {...base} {...p}>
      <path d="M10 2h4M12 14l3-3" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}

export function IconSeconds(p) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

export function IconHeart(p) {
  return (
    <svg {...base} {...p}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

// Corazón con línea de pulso, para el centro
export function IconHeartPulse(p) {
  return (
    <svg {...base} {...p}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  )
}

export function IconLock(p) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  )
}

export function IconImages(p) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M21 7v12a2 2 0 0 1-2 2H7" />
      <circle cx="8" cy="8" r="1.5" />
      <path d="M3 13l3-3 4 4 3-3 4 4" />
    </svg>
  )
}

export function IconTap(p) {
  return (
    <svg {...base} {...p}>
      <path d="M9 11V6a2 2 0 0 1 4 0v5" />
      <path d="M13 11V8a2 2 0 0 1 4 0v3" />
      <path d="M17 11a2 2 0 0 1 4 0v3a7 7 0 0 1-7 7h-1.5a6 6 0 0 1-4.6-2.1L4 16.5a2 2 0 0 1 3-2.6l2 1.6" />
    </svg>
  )
}

export function IconArrowLeft(p) {
  return (
    <svg {...base} {...p}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}
