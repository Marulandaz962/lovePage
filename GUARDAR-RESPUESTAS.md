# Recibir las respuestas de Karito en una hoja de Google

Cada vez que ella guarde una respuesta en una carta, se agrega una fila a una hoja de cálculo tuya
y te llega un correo avisándote. Toma unos 5 minutos y es gratis.

## 1. Crear la hoja

1. Entra a <https://sheets.new> con tu cuenta de Google.
2. Ponle de nombre **Cartas de Karito** (arriba a la izquierda).

## 2. Pegar el código

1. En la hoja, ve al menú **Extensiones → Apps Script**.
2. Borra lo que aparece en el editor y pega todo el contenido del archivo `google-apps-script.js`.
3. Presiona el ícono de guardar.

## 3. Publicarlo

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. En el engranaje de "Seleccionar tipo", elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo
   - **Quién tiene acceso:** Cualquier usuario
4. Presiona **Implementar** y luego **Autorizar acceso**. Elige tu cuenta.
   Google mostrará un aviso de "app no verificada" porque el código es tuyo: entra en
   **Configuración avanzada → Ir a … (no seguro)** y acepta.
5. Copia la **URL de la aplicación web** (termina en `/exec`).

## 4. Conectarla a la página

Abre `src/config.ts` y pega la dirección en `hojaRespuestas`:

```ts
hojaRespuestas: 'https://script.google.com/macros/s/XXXXXXXX/exec',
```

Listo. Abre la página, responde una carta de prueba y revisa que aparezca en la hoja
(luego puedes borrar esa fila).

## Cómo funciona

- Sus respuestas **también siguen guardadas en su celular**, para que ella pueda volver a leerlas y editarlas.
- Si ella edita una respuesta, llega como una fila nueva: así ves también cómo la cambió.
- Si no tiene internet al guardar, la respuesta se envía sola la próxima vez que abra la página.
- La dirección del script queda dentro de la página. No es un secreto muy fuerte, pero es casi
  imposible que alguien la encuentre sin saber que existe.
- Si cambias el código del script, tienes que hacer **Implementar → Gestionar implementaciones → Editar → Nueva versión**
  para que los cambios se apliquen.
