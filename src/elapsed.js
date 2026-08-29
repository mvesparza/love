// Desglose calendario-exacto del tiempo transcurrido entre `start` y `now`.
// Devuelve años, meses, semanas, días, horas, minutos, segundos.
export function getElapsed(start, now) {
  if (now < start) now = start

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()
  let hours = now.getHours() - start.getHours()
  let minutes = now.getMinutes() - start.getMinutes()
  let seconds = now.getSeconds() - start.getSeconds()

  if (seconds < 0) { seconds += 60; minutes-- }
  if (minutes < 0) { minutes += 60; hours-- }
  if (hours < 0) { hours += 24; days-- }
  if (days < 0) {
    // días del mes anterior al mes actual
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    days += prevMonth
    months--
  }
  if (months < 0) { months += 12; years-- }

  const weeks = Math.floor(days / 7)
  days = days % 7

  return { years, months, weeks, days, hours, minutes, seconds }
}
