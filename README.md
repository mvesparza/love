# love 💗

Página única (sin backend, sin base de datos) con un cronómetro que cuenta el
tiempo transcurrido desde una fecha: **años, meses, semanas, días, horas,
minutos y segundos**. Pensada para abrirse escaneando un QR desde el móvil
(Android e iOS) y desplegarse gratis en GitHub Pages.

## Stack

- React 18 + Vite 5 (build ligero, `base: './'` → rutas relativas)
- Solo CSS plano, sin librerías de estilos
- Deploy automático con GitHub Actions

## Desarrollo

```bash
npm install
npm run dev
```

## Configurar el detalle

Edita [`src/config.js`](src/config.js):

```js
export const START_DATE = new Date(2025, 7, 30, 0, 0, 0) // mes es 0-11 (7 = agosto)
export const TITLE = 'Nuestro tiempo juntos'
export const SUBTITLE = 'desde el 30 de agosto de 2025'
export const FOOTER = 'te amo'
```

Los colores están en [`src/styles.css`](src/styles.css) (bloque `:root`, lila principal).

## Collage de fotos (botón sorpresa)

- Mientras está bloqueado, el botón muestra una **cuenta regresiva** (días,
  horas, min, seg) hasta `UNLOCK_DATE` (en [`src/config.js`](src/config.js)).
  Al llegar a cero se transforma en el botón y dispara animaciones (estallido
  de corazones, brillo, aros, vibración en móvil).
- Valor real recomendado: el primer aniversario → `new Date(2026, 7, 30, 0, 0, 0)`.
  Ahora está en **modo prueba** — cámbialo antes de publicar de verdad.
- El collage vive en la ruta `#collage`. Pon las imágenes en
  [`public/fotos/`](public/fotos) y lístalas en `PHOTOS` dentro de `src/config.js`.
  Si una foto falta, se muestra un marcador con un corazón.

## Desplegar en GitHub Pages (push manual, sin Actions)

El código fuente vive en `main`. La versión compilada se publica en la
rama `gh-pages` con un comando.

1. Una sola vez, en **Settings → Pages → Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` · carpeta `/ (root)` · Save
2. Cada vez que quieras publicar cambios:
   ```bash
   npm run deploy
   ```
   Esto hace `vite build` y sube `dist/` a la rama `gh-pages`.
3. El sitio queda en `https://USUARIO.github.io/REPO/` (~1-2 min tras el primer deploy).

> El `git push` normal a `main` solo guarda el código, **no** publica el sitio.
> Publicar = `npm run deploy`.

## Generar el QR

Después de conocer la URL pública:

```bash
npm run qr https://USUARIO.github.io/REPO/
```

Genera `qr/qr.png` y `qr/qr.svg` para imprimir o compartir. Cualquier lector de
cámara de Android/iOS abre el enlace directamente.
