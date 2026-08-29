// Genera un QR (PNG + SVG) apuntando a la URL pública del sitio.
// Uso:  node scripts/generate-qr.js https://usuario.github.io/repo/
import QRCode from 'qrcode'
import { writeFileSync, mkdirSync } from 'node:fs'

const url = process.argv[2]
if (!url) {
  console.error('Falta la URL.  Ej: node scripts/generate-qr.js https://usuario.github.io/love/')
  process.exit(1)
}

mkdirSync('qr', { recursive: true })

const opts = { margin: 2, width: 1024, color: { dark: '#6b4457', light: '#ffffff' } }

QRCode.toFile('qr/qr.png', url, opts)
QRCode.toString(url, { type: 'svg', ...opts }, (err, svg) => {
  if (err) throw err
  writeFileSync('qr/qr.svg', svg)
})

console.log('QR generado en qr/qr.png y qr/qr.svg  ->  ' + url)
