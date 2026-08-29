// Lee ancho/alto reales (respetando orientación EXIF) de cada foto en public/fotos/
// y los imprime listos para pegar en PHOTOS de src/config.js.
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const dir = resolve('public/fotos')

// dimensiones desde el marcador SOF de un JPEG
function jpegSize(buf) {
  let i = 2
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue }
    const m = buf[i + 1]
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) }
    }
    if (m === 0xd8 || m === 0xd9 || (m >= 0xd0 && m <= 0xd7)) { i += 2; continue }
    i += 2 + buf.readUInt16BE(i + 2)
  }
  return null
}

// orientación EXIF (1 = normal; 6/8 = girada 90°)
function exifOrientation(buf) {
  const app1 = buf.indexOf('Exif\0\0', 0, 'latin1')
  if (app1 < 0) return 1
  const tiff = app1 + 6
  const le = buf.toString('latin1', tiff, tiff + 2) === 'II'
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o))
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o))
  const ifd0 = tiff + u32(tiff + 4)
  const n = u16(ifd0)
  for (let k = 0; k < n; k++) {
    const e = ifd0 + 2 + k * 12
    if (u16(e) === 0x0112) return u16(e + 8) || 1
  }
  return 1
}

for (const f of readdirSync(dir).filter((x) => /\.jpe?g$/i.test(x)).sort()) {
  const buf = readFileSync(resolve(dir, f))
  const s = jpegSize(buf)
  const o = exifOrientation(buf)
  const rotated = o >= 5
  const w = rotated ? s.h : s.w
  const h = rotated ? s.w : s.h
  console.log(`${f}\t${w} x ${h}\t(exif ${o}${rotated ? ', girada' : ''})`)
}
