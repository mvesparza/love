// ── Configuración del detalle ──────────────────────────────
// Fecha y hora de inicio de la cuenta (hora local del dispositivo).
// Formato: año, mes (1-12 → aquí 0-11), día, hora, minuto, segundo
export const START_DATE = new Date(2025, 7, 30, 10, 0, 0) // 30 de agosto de 2025, 10:00 am

// Textos editables (sin repetir ideas entre ellos)
export const DATE_LABEL = '30 · 08 · 2025' // se muestra arriba, en dorado
export const TITLE = 'Nuestro tiempo juntos' // frase principal, en caligrafía
export const TAGLINE = 'y cada segundo suma' // línea corta bajo el título
export const NAMES = 'Marco & Jacqueline' // pareja, sobre el "te amo"
export const FOOTER = 'te amo'

// ── Desbloqueo del collage de fotos ────────────────────────
// El botón aparece bloqueado y se abre solo al llegar este momento.
//
export const UNLOCK_DATE = new Date(2026, 7, 30, 10, 0, 0) // 30 de agosto de 2026, 10:00 am

export const BUTTON_LABEL = 'Memorias del corazón' // texto del botón sorpresa
export const COUNTDOWN_LABEL = 'muy pronto' // texto sobre la cuenta regresiva

// Globos que salen (al azar) al tocar el botón aún bloqueado
export const LOCKED_MESSAGES = [
  '🫢 tramposita debes esperar 🫣',
  'paciencia amoor 🙄',
  'oyeee 😠😠',
]

// ── Feed "Nuestra historia" ────────────────────────────────
export const FEED_TITLE = 'Nuestra historia'
export const LOADER_TEXT = 'nuestro nosotros...'
export const FEED_ANNIVERSARY = 'Feliz Aniversario Mi Amor' // cierre, en caligrafía

export const FEED_INTRO =
  'Amada mía... nunca imaginé que nuestros caminos se fueran a cruzar, y mucho menos que ibas a terminar siendo la persona más importante de mi vida. Qué bonito que haya pasado, porque sin darnos cuenta empezamos a construir todo esto juntos. Y aquí estamos... 💟'

// Párrafos separados por una línea en blanco. **texto** = resaltado
export const FEED_OUTRO = `Mi reina, hoy ya no sé imaginar una vida que no sea contigo. Cuando pienso en mi futuro en todos mis planes apareces tú, y la verdad es que no quiero que sea de otra manera.

Quiero una vida contigo, hijos, una familia, nuestro hogar, nuestras cosas, nuestras aventuras y hasta esas pequeñas cosas del día a día que quizás ahora no parecen tan importantes pero que algún día van a ser nuestros recuerdos favoritos.

Sé que van a existir días difíciles, porque no somos perfectos y nuestra relación tampoco lo es. Vamos a enojarnos, vamos a tener diferencias y seguramente habrá momentos en los que nos toque hablar mucho, escucharnos y tener paciencia. Pero quiero que nunca olvidemos que somos un equipo y que siempre podemos volver a elegirnos.

Gracias por llegar a mi vida y por convertirte en mi paz, en mi lugar seguro, en mi mejor amiga, mi compañera y en la persona con la que quiero compartir todo.

A veces todavía no me creo que estemos viviendo todo esto. Que aquella salida a las luces terminó convirtiéndose en esto, en nosotros, en nuestros recuerdos y en miles de sueños por cumplir.

Y si algo quiero, es seguir haciendo recuerdos contigo. Seguir viajando, seguir riéndonos, seguir saliendo por unas bielitas, seguir bailando, seguir teniendo aventuras y también seguir creciendo juntos, con nuestras debilidades reforzadas con mucho aprendizaje, porque para mí lo nuestro es hermoso así como es y deseo con toda el alma que todas mis historias por contar empiecen con las palabras, **mi mujer y yo...**

Te amo muchísimo 💟

Y espero que cuando veamos todas estas fotos dentro de muchos años podamos decir que este fue solo el comienzo...

Nos espera una vida maravillosa, y quiero vivirla toda contigo. 💟🥹❤️`

// Línea de tiempo, orden cronológico de arriba a abajo.
//  - src:   archivo dentro de public/fotos/
//  - w, h:  medidas reales de la imagen (evitan saltos de layout). Si cambias
//           una foto, regenera con:  node scripts/photo-dims.mjs
//  - date:  etiqueta sobre la foto
//  - story: el recuerdo de ese mes ("\n" = salto de línea dentro del texto)
export const PHOTOS = [
  {
    src: 'fotos/agosto2025.jpeg',
    w: 898, h: 1198,
    date: 'Agosto 2025',
    story:
      'Subimos al Cotopaxi sin saber que ese día iba a cambiarlo todo. Ahí arriba, con las manos heladas y después de toda la aventura, te pregunté a mi manera si querías ser mi novia. Dijiste que sí y bajamos siendo algo más. Ese día empezó oficialmente nuestro nosotros. ❤️',
  },
  {
    src: 'fotos/septiembre2025.jpeg',
    w: 968, h: 1280,
    date: 'Septiembre 2025',
    story:
      'Ya había pasado nuestro primer mes y empezábamos a extrañarnos más de lo normal cuando no estábamos juntos. Al mismo tiempo parecía que nos conocíamos de hace muchísimo, y cada día íbamos haciendo más recuerdos juntitos. Muchos momentos que quizás parecían simples, pero que hasta ahora están guardaditos en el corazón. 💟',
  },
  {
    src: 'fotos/octubre2025.jpeg',
    w: 900, h: 1600,
    date: 'Octubre 2025',
    story:
      'Ya después no sabíamos ni cómo despedirnos. Desde que empezamos casi no nos hemos separado y estar contigo se volvió algo tan bonito que ya no me imagino mis días sin ti. Contigo siento que estoy en casa, donde puedo ser yo y estar tranquilo. ❤️',
  },
  {
    src: 'fotos/noviembre2025.jpeg',
    w: 960, h: 1280,
    date: 'Noviembre 2025',
    story:
      'Nuestras escapadas se volvieron parte de nosotros. No importaba mucho a dónde íbamos ni si teníamos un plan, lo importante era estar juntitos. Y creo que ahí entendí que con mi reina cualquier lugar se vuelve especial. 🥹❤️',
  },
  {
    src: 'fotos/diciembre2025.jpeg',
    w: 1206, h: 1600,
    date: 'Diciembre 2025',
    story:
      'Nuestra primera Navidad. 🎄❤️\nLa primera de muchas, me gusta pensar que vendrán muchísimos diciembres más, más navidades, más recuerdos y más momentos que algún día vamos a mirar y decir “mira todo lo que hemos vivido juntitos”.',
  },
  {
    src: 'fotos/enero2026.jpeg',
    w: 900, h: 1600,
    date: 'Enero 2026',
    story:
      'Empezamos el año subiendo una montaña, porque contigo hasta terminar cansadísimos se siente bien jaja. Fue una de nuestras primeras aventuras del año y ya sabía que vendrían muchísimas más. Más lugares y más historias para seguir contando. 🏔️❤️',
  },
  {
    src: 'fotos/febrero2026.jpeg',
    w: 960, h: 1280,
    date: 'Febrero 2026',
    story:
      'Para entonces ya se nos hacía imposible amanecer separados. Nos acomodábamos como fuera con tal de despertar juntitos. Fue mi San Valentín más bonito, no solo por el día sino porque estaba contigo, y la verdad es que eso siempre ha sido lo más importante para mí. 💟',
  },
  {
    src: 'fotos/marzo2026.jpeg',
    w: 704, h: 1217,
    date: 'Marzo 2026',
    story:
      'Mas de medio año juntos y me fuiste abriendo la puerta a una parte mas importante de tu vida, tu familia. Me recibieron con un cariño que hasta ahora me sorprende y poco a poco me fui sintiendo parte de algo más grande. Se sintió muy bonito, como que estaba entrando un poquito más a tu vida. ❤️',
  },
  {
    src: 'fotos/abril2026.jpeg',
    w: 900, h: 1600,
    date: 'Abril 2026',
    story:
      'Nunca nos falta nuestra salida por unas bielitas los dos solitos, sin mucho plan y sin ninguna prisa. 🍻❤️ Y la verdad amo esos momentos, porque contigo un día cualquiera termina siendo un buen día. No necesitamos hacer algo increíble, con estar juntos ya tenemos el mejor plan amor.',
  },
  {
    src: 'fotos/mayo2026.jpeg',
    w: 900, h: 1600,
    date: 'Mayo 2026',
    story:
      'Nuestro primer concierto juntos. 🎶❤️\nNo nos sabíamos las canciones jaja, pero igual la pasamos increíble. Fue otra experiencia nueva que vivimos juntos y otro recuerdo que se quedó con nosotros. Y pensar que contigo he vivido tantas primeras veces me hace muy feliz, porque todavía nos quedan muchísimas más.',
  },
  {
    src: 'fotos/junio2026.jpeg',
    w: 900, h: 1600,
    date: 'Junio 2026',
    story:
      'Llegó el mes en que más caminamos buscando nuestro lugar. Vimos casas, terrenos y un montón de lugares donde empezamos a imaginarnos viviendo juntos. Entre visitas y conversaciones ya no solo hablábamos de lo que queríamos hacer ahora, sino de cómo queríamos que fuera nuestra vida después. 🏡❤️',
  },
  {
    src: 'fotos/julio2026.jpeg',
    w: 900, h: 1600,
    date: 'Julio 2026',
    story:
      'Ya casi llegábamos al año y pasó algo maravilloso, firmamos la compra de nuestro terrenito. ❤️🏡 Nuestro pedacito de tierra, ese que algún día espero ver convertido en nuestro hogar. Y es increíble pensar que todo esto empezó simplemente porque dos personas se encontraron y decidieron darse una oportunidad.',
  },
  {
    src: 'fotos/agosto2026.jpeg',
    w: 1200, h: 1600,
    date: 'Agosto 2026',
    story:
      'Un paseo en familia, ya sintiéndonos uno parte del otro como siempre. Vísperas de nuestro año de novios y tantas cosas que ya habíamos vivido que parece que lleváramos muchísimo más tiempo juntos. Y aun así siento que esto recién empieza. Todavía nos faltan muchísimas aventuras, viajes, sueños, risas y recuerdos por hacer... 💟',
  },
]
