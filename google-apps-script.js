// Código para pegar en Google Apps Script (ver GUARDAR-RESPUESTAS.md).
// Recibe cada respuesta de Karito y la agrega como una fila en la hoja de cálculo.

// Cambia a false si no quieres recibir un correo cada vez que ella responda.
const AVISAR_POR_CORREO = true;

function doPost(e) {
  const datos = JSON.parse(e.postData.contents);
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName('Respuestas') || libro.insertSheet('Respuestas');

  if (hoja.getLastRow() === 0) {
    hoja.appendRow(['Fecha', 'Carta', 'Asunto', 'Pregunta', 'Respuesta']);
    hoja.getRange('A1:E1').setFontWeight('bold');
    hoja.setFrozenRows(1);
  }

  const recortar = (texto, max) => String(texto || '').slice(0, max);
  const fila = [
    new Date(datos.fecha || Date.now()),
    Number(datos.carta) || '',
    recortar(datos.asunto, 200),
    recortar(datos.pregunta, 300),
    recortar(datos.respuesta, 5000),
  ];
  hoja.appendRow(fila);

  if (AVISAR_POR_CORREO) {
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: `Karito respondió la carta "${fila[2]}"`,
      body: `${fila[3]}\n\n${fila[4]}\n\nTodas sus respuestas: ${libro.getUrl()}`,
    });
  }

  return ContentService.createTextOutput('ok');
}
