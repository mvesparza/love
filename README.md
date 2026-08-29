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

Los colores están en [`src/styles.css`](src/styles.css) (variables `--bg-*`, `--ink`, `--accent`).

## Desplegar en GitHub Pages

1. Crea un repo en GitHub y sube el proyecto:
   ```bash
   git add .
   git commit -m "detalle"
   git branch -M main
   git remote add origin https://github.com/USUARIO/REPO.git
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` publica el sitio en `https://USUARIO.github.io/REPO/`.

## Generar el QR

Después de conocer la URL pública:

```bash
npm run qr https://USUARIO.github.io/REPO/
```

Genera `qr/qr.png` y `qr/qr.svg` para imprimir o compartir. Cualquier lector de
cámara de Android/iOS abre el enlace directamente.
