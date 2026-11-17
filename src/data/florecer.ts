// Textos de la página "Volver a florecer" (/florecer).
// Todo lo que dice la página se cambia desde aquí. Las frases de Karito son sus respuestas
// reales de las cartas; lo que va después de cada una es lo que tú le contestas.

export const portada = {
  saludo: 'Karito',
  texto: 'Esta carta es para ti. Ábrela cuando tengas un momento tranquilo.',
};

// Párrafos de la carta, en orden.
export const carta = [
  'Te escribo esto con calma, porque en medio de la discusión no supe decirte lo que de verdad siento, y tú mereces escucharlo bien.',
  'Lo siento. Siento mucho cómo te hablé. Te respondí de forma grosera, te arremedé, y eso no te lo merecías. Me hiciste una pregunta de esas que se hacen jugando y yo exploté como si me hubieras atacado. No lo hiciste. Lo que pasó fue que yo venía cargando mucho por dentro y lo dejé caer sobre ti.',
  'Te quiero contar lo que no te había contado. Estos últimos meses han sido muy difíciles con la empresa. Llevo cuatro años construyéndola y ahora estamos pasando por un momento económico complicado. He vivido con mucha presión y mucho estrés, y no te lo dije. Tú no tenías cómo saberlo, y aun así fuiste tú la que terminó pagando por eso. Sé que no es una excusa; es la verdad, y quiero que la conozcas.',
  'Hay algo más que me pesa. Tengo miedo de que, si esto sigue así, no pueda cumplirte con irme un tiempo a Londres a estar contigo. Me da miedo fallarte, que mis promesas se queden en palabras vacías. Pero entendí que callarme ese miedo fue peor, porque te dejó sin saber qué me estaba pasando.',
  'Quiero que sepas que todo lo que hago, cada día de trabajo y cada madrugada, es para construir la vida que soñamos juntos. Y no quiero que, en el camino para llegar a ella, te pierda a ti.',
  'Te he sentido distante, y lo entiendo. Con un océano de por medio, esa distancia se siente todavía más. Te extraño. Extraño tu dulzura, tus mensajes, a la Karito que me hace querer salir adelante. Ojalá mi peor momento no cambie la forma en que me miras; déjame demostrarte que puedo hacerlo mejor.',
  'Me describiste como seguro, determinado y leal. Quiero ser todo eso también cuando las cosas se ponen difíciles: seguro para bajar la voz en vez de subirla, determinado a cuidarte incluso cuando estoy cansado, y leal a lo que somos, no a mi estrés ni a mi orgullo.',
  'Sigo eligiéndote. Hoy y todos los días.',
];

// Va después de la firma.
export const posdata = 'Y sí, te querría aunque fueras un gusano. Te buscaría la mejor tierra del jardín, al lado de los tulipanes.';

// "Te escuché": una frase suya y lo que haces con eso.
export const escuchado: { asunto: string; ella: string; yo: string }[] = [
  {
    asunto: 'Entre husos horarios',
    ella: 'Últimamente tus mensajes han sido una motivación muy grande para levantarme cuando no tengo ganas.',
    yo: 'Por eso no voy a dejar que una discusión te quite eso. Aunque estemos en desacuerdo, cada mañana en Londres vas a tener un mensaje mío esperándote.',
  },
  {
    asunto: 'Número equivocado',
    ella: 'Me sentía muy tranquila y cómoda hablando contigo y al final de la llamada no entendía por qué y cómo te conté tantas cosas.',
    yo: 'Quiero que siempre te sientas así conmigo, también cuando no estemos de acuerdo. Que hablar conmigo siga siendo un lugar seguro.',
  },
  {
    asunto: 'Nuestra pequeña costumbre',
    ella: 'Los domingos. Me gusta mucho nuestra dinámica de pasar de novios a amigos, siento que tenemos muchas facetas juntos.',
    yo: 'Los domingos son sagrados. Y en todas esas facetas quiero sumar una más: ser tu equipo cuando discutimos, no tu rival.',
  },
  {
    asunto: 'Recuerdos',
    ella: 'El momento en el que ambos nos dimos cuenta que el amor se nos está desbordando por los ojos.',
    yo: 'Ese amor sigue ahí, igual de grande. Una discusión no lo cambia; solo me recuerda que tengo que cuidarlo mejor.',
  },
];

// Promesas concretas para cuando lleguen las discusiones.
export const promesas: { titulo: string; texto: string }[] = [
  {
    titulo: 'Contarte cuando no estoy bien',
    texto: 'Ya no voy a cargar solo con el estrés. Si tengo un mal día, te lo voy a decir antes de que se convierta en una mala palabra.',
  },
  {
    titulo: 'Escucharte antes de defenderme',
    texto: 'Cuando me digas que algo te dolió, primero voy a entenderte. Lo mío puede esperar a que te sientas escuchada.',
  },
  {
    titulo: 'Pedir una pausa en vez de herirte',
    texto: 'Si siento que estoy perdiendo la calma, te voy a decir "dame un momento" y voy a volver. Nunca más una burla ni un tono que te haga sentir pequeña.',
  },
  {
    titulo: 'Hablar lo importante con la voz',
    texto: 'Lo difícil lo hablamos en llamada, no por chat, donde puedo escuchar tu tono y tú el mío.',
  },
  {
    titulo: 'Decirte la verdad sobre Londres',
    texto: 'No te voy a prometer fechas que no sé si puedo cumplir. Te voy a contar cómo van las cosas, lo bueno y lo difícil, y lo vamos a planear juntos.',
  },
  {
    titulo: 'Que nunca termines el día sintiéndote sola',
    texto: 'Aunque no hayamos resuelto todo, antes de que te duermas en Londres vas a saber que te quiero.',
  },
];

// Los sueños que ella escribió, como un camino que vamos a recorrer.
export const suenos: { titulo: string; ella: string; paso: string }[] = [
  {
    titulo: 'El reencuentro',
    ella: 'Quiero que pasemos todo el día junticos, tal vez en un lugar de campo con una vista muy bonita.',
    paso: 'Planearlo juntos, con la verdad sobre la mesa, para que cuando llegue sea real y no solo una promesa.',
  },
  {
    titulo: 'Bailar nuestra canción',
    ella: 'Heaven, de Bryan Adams.',
    paso: 'Escucharla en la misma habitación, y esta vez sin una pantalla de por medio.',
  },
  {
    titulo: 'Cumplir nuestras metas',
    ella: 'Sé que para ese entonces ya habrás cumplido muchas de tus metas como productor musical y yo espero haber logrado dedicarme a la rama de la medicina que más me apasiona.',
    paso: 'Celebrar cada paso del otro como si fuera propio, empezando por los de este año.',
  },
  {
    titulo: 'Un hogar con naturaleza y solecito',
    ella: 'En cualquier lugar del mundo, pero contigo.',
    paso: 'Ir construyendo, sin afán, el lugar donde vamos a vivir los dos.',
  },
  {
    titulo: 'Dentro de diez años',
    ella: 'Vamos a estar muy orgullosos de lo lejos que ha llegado el otro, vamos a recordar con mucho amor todo el camino que recorrimos juntos.',
    paso: 'Que este momento difícil sea parte de ese camino que recordemos con amor: el día en que aprendimos a cuidarnos mejor.',
  },
];

export const pacto = {
  titulo: 'Tu parte del pacto',
  texto: 'Esto también es de los dos. Si hay algo que necesites de mí cuando discutamos, o algo que tú quieras prometer, escríbelo aquí. Si prefieres, puedes dejarlo en blanco.',
  boton: 'Volvamos a florecer',
  gracias: 'Gracias por elegirnos otra vez. Te amo, Karito.',
};
