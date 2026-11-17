// Textos de la página "Mi Farito" (/farito).
// Todo lo que dice la página se cambia desde aquí.

export const textos = {
  // Pantalla de inicio: el nombre "Karol" se transforma en "Farito"
  nombre: 'Karol',
  apodo: 'Farito',
  subtitulo: 'La luz que me guía',
  tocar: 'Toca para encender tu faro',

  // Aparece cuando se enciende el faro y el barquito navega hacia la luz
  faro: 'Eres el faro que me guía por todo el mar, hasta llegar a ti.',

  // Instrucción para buscar las estrellas escondidas
  pista: 'Desliza tu dedo para mover la luz y encuentra las estrellas escondidas en el cielo.',

  // Cuando encuentra todas, las estrellas se unen formando un corazón
  final: 'Mira: juntas forman un corazón. Eso eres tú para mí, la luz que me guía.',
  botonAmanecer: 'Ver el amanecer',

  // Después del amanecer
  saludoAmanecer: 'Buenos días, Farito',
  textoAmanecer: 'Después de cada noche, tu luz me trae hasta el amanecer. Baja un poquito, que tengo una pregunta para ti.',
  bajar: 'Tu pregunta',
};

// Las estrellas escondidas. Cada una guarda una frase (son 6 porque forman un corazón).
export const luces: string[] = [
  'Hay un océano entero entre Pereira y Londres, y aun así nunca me siento perdido: siempre sé hacia dónde mirar.',
  'Cuando el estrés me deja a oscuras, tu voz es lo primero que vuelve a encenderse.',
  'Un faro no se mueve de su lugar, y tú no te has movido de mi corazón desde aquel 31 de mayo.',
  'Tu luz no grita, alumbra con calma. Así es como quiero aprender a quererte.',
  'Tú sueñas con la medicina y yo con la música, y tu luz me recuerda que los dos sueños caben en la misma vida.',
  'No importa qué tan oscura esté la noche: contigo siempre encuentro el camino a casa.',
];

export const lista = {
  titulo: 'Las luces que encontraste',
  texto: 'Las seis estrellas que encendiste con tu luz, para que las leas cuando quieras.',
};

export const pregunta = {
  titulo: 'Una pregunta para ti',
  texto: '¿Estás dispuesta a estar conmigo donde sea que nos lleve la vida? Cuéntame por qué, y qué te hace sentir segura de seguir siendo mi compañía.',
  placeholder: 'Escríbeme con el corazón, Farito…',
  boton: 'Contigo, donde sea',
  gracias: 'Entonces que el mar nos lleve a donde quiera: yo siempre voy a seguir tu luz. Te amo, Farito.',
};
