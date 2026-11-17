// Todo lo personal de la web se cambia desde aquí.
export const config = {
  titulo: 'La coincidencia más linda',
  nombre: 'Karito',
  firma: 'Con todo mi amor, desde Pereira',

  // Formato año-mes-día
  nosConocimos: '2026-05-31',
  juntosDesde: '2026-08-04',

  ciudades: {
    yo: { nombre: 'Pereira', pais: 'Colombia', lat: 4.8133, lon: -75.6961, zona: 'America/Bogota' },
    ella: { nombre: 'Londres', pais: 'Inglaterra', lat: 51.5072, lon: -0.1276, zona: 'Europe/London' },
  },

  // Número con indicativo para recibir sus respuestas, ej: '573001234567'.
  // Si lo dejas vacío, WhatsApp le deja elegir a quién enviarlas.
  whatsapp: '',

  // Dirección de tu Google Apps Script para recibir sus respuestas en una hoja de cálculo.
  // Los pasos están en GUARDAR-RESPUESTAS.md. Si lo dejas vacío, solo se guardan en su celular.
  hojaRespuestas: 'https://script.google.com/macros/s/AKfycbytqEql0MN5BUa6SloZjA-YcCzuRRY_eJGZKmZXy0OD5gblStY7cg9k-eFYD-eSFZ0/exec',
};
