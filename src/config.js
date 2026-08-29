// ── Configuración del detalle ──────────────────────────────
// Fecha y hora de inicio de la cuenta (hora local del dispositivo).
// Formato: año, mes (1-12 → aquí 0-11), día, hora, minuto, segundo
export const START_DATE = new Date(2025, 7, 30, 0, 0, 0) // 30 de agosto de 2025, 00:00

// Textos editables (sin repetir ideas entre ellos)
export const DATE_LABEL = '30 · 08 · 2025' // se muestra arriba, en dorado
export const TITLE = 'Nuestro tiempo juntos' // frase principal, en caligrafía
export const TAGLINE = 'y cada segundo suma' // línea corta bajo el título
export const NAMES = 'Marco & Jacqueline' // pareja, sobre el "te amo"
export const FOOTER = 'te amo'

// ── Desbloqueo del collage de fotos ────────────────────────
// El botón aparece bloqueado y se abre solo al llegar este momento.
//
// REAL (primer aniversario): 30 de agosto de 2026, 00:00
//   export const UNLOCK_DATE = new Date(2026, 7, 30, 0, 0, 0)
//
// PRUEBA activa: hoy a las 22:25
export const UNLOCK_DATE = new Date(2026, 7, 28, 22, 25, 0)

export const BUTTON_LABEL = 'Memorias del corazón' // texto del botón sorpresa
export const COUNTDOWN_LABEL = 'muy pronto' // texto sobre la cuenta regresiva
export const LOCKED_MESSAGE = '🫢 tramposita debes esperar 🫣' // globo al tocar bloqueado

// Fotos del collage.
// 1) Copia tus imágenes dentro de la carpeta  public/fotos/
// 2) Escribe aquí sus nombres (y un texto opcional)
export const PHOTOS = [
  { src: 'fotos/01.jpg', caption: '' },
  { src: 'fotos/02.jpg', caption: '' },
  { src: 'fotos/03.jpg', caption: '' },
  { src: 'fotos/04.jpg', caption: '' },
  { src: 'fotos/05.jpg', caption: '' },
  { src: 'fotos/06.jpg', caption: '' },
  { src: 'fotos/07.jpg', caption: '' },
  { src: 'fotos/08.jpg', caption: '' },
]
