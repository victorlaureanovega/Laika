'use client';
import { useState } from 'react';
import Image from "next/image";

// Tarjetas de acordeón para los textos de la plaqueta
export default function Textos() {
  var estilosBoton = "w-full p-5 text-left text-white bg-[#6C757D] hover:bg-[#7F8C8D] transition-colors tracking-wide flex justify-between items-center cursor-pointer";
  const [abierto, setAbierto] = useState<number | null>(null);    // Para abrir o cerrar una tarjeta

  return (
    <div className="max-w-3xl mx-auto space-y-4">

      {/* --- Las estrellas --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 1 ? null : 1)}
          className={estilosBoton}
        >
          <p className="font-medium"> Las estrellas </p>
          <span>{abierto === 1 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 1 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Subo las escaleras,
            </p>
            <p>
              entro en la habitación
            </p>
            <p>
              con pasos agotados,
            </p>
            <p>
              sin energía, sin esfuerzo.
            </p>
            <p>
              La cruzo lentamente
            </p>
            <p>
              y recojo el celular
            </p>
            <p>
              que no anuncia más que silencio,
            </p>
            <p>
              que nadie ha llamado
            </p>
            <p className="mb-4">
              desde la última vez que revisé.
            </p>

            <p>
              Tecleo un par de números
            </p>
            <p>
              y escucho un sonido constante,
            </p>
            <p>
              un silencio impaciente.
            </p>
            <p>
              Una voz se anuncia,
            </p>
            <p>
              ronca pero sin amargura,
            </p>
            <p>
              dulce pero distante,
            </p>
            <p className="mb-4">
              suave y aún sin espabilar;
            </p>

            <p>
              Parece una eternidad desde que te fuiste.
            </p>
            <p>
              Te extraño más que ayer.
            </p>
            <p>
              Temía no volver a saber nada de ti,
            </p>
            <p>
              y empiezo a depender de tu presencia,
            </p>
            <p>
              aun cuando me prometí no hacerlo,
            </p>
            <p>
              sabiendo que estaría solamente
            </p>
            <p className="mb-4">
              unas cuantas horas contigo.
            </p>

            <p>
              Unas cuantas horas,
            </p>
            <p>
              una noche entera,
            </p>
            <p>
              un anochecer,
            </p>
            <p>
              un despertar,
            </p>
            <p>
              no se podrían desear mejores horas
            </p>
            <p className="mb-4">
              ni mejores circunstancias…
            </p>

            <p>
              Pero sé que es mentira.
            </p>
            <p>
              Sé que no piensas eso en verdad,
            </p>
            <p>
              y que yo tampoco debería,
            </p>
            <p>
              pero recuerdo bien las nubes,
            </p>
            <p>
              el cielo de negro violeta,
            </p>
            <p>
              las estrellas que brillaban,
            </p>
            <p className="mb-4">
              y brillaban para nosotros;
            </p>

            <p>
              Miro hacia la cama,
            </p>
            <p>
              que se ve como hace dos días,
            </p>
            <p>
              como hace dos noches,
            </p>
            <p>
              pues aún no he querido tocarla,
            </p>
            <p>
              tal vez por miedo a olvidar,
            </p>
            <p>
              o más bien,
            </p>
            <p className="mb-4">
              a tener que superar.
            </p>

            <p>
              Edades cortas,
            </p>
            <p>
              respiraciones largas,
            </p>
            <p>
              luces tenues,
            </p>
            <p>
              sábanas blancas,
            </p>
            <p>
             cuerpo de plástico,
            </p>
            <p className="mb-4">
              manos de sangre.
            </p>

            <p>
              Miro ahora hacia las cortinas,
            </p>
            <p>
              hacia la ventana,
            </p>
            <p>
              el cielo azul claro,
            </p>
            <p>
              añorando su vieja tonalidad,
            </p>
            <p>
              añorando una sombra,
            </p>
            <p>
              una noche,
            </p>
            <p>
              la misma noche
            </p>
            <p className="mb-4">
              en que las estrellas brillaban;
            </p>

            <p>
              … brillaban para nosotros,
            </p>
            <p>
              para un espectro
            </p>
            <p className="mb-4">
              y un cazafantasmas.
            </p>

            <p>
              No será hoy ni mañana,
            </p>
            <p>
              pero el día que los astros se alineen,
            </p>
            <p>
              tal vez las luces se apaguen de nuevo,
            </p>
            <p className="mb-4">
              y entonces las estrellas volverán a brillar;
            </p>

            <p>
              Silencio, duda.
            </p>
            <p className="mb-4">
              Una respiración profunda;
            </p>

            <p className="mb-4">
              Tal vez así sea.
            </p>
          </div>
        )}
      </div>

      {/* --- Barco de vapor --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 2 ? null : 2)}
          className={estilosBoton}
        >
          <span className="font-medium"> Barco de vapor </span>
          <span>{abierto === 2 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 2 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Cuando es necesario,
            </p>
            <p>
              puedo creer en cualquier cosa.
            </p>
            <p>
              ¿Qué significa un horizonte de eventos
            </p>
            <p>
              cuando el tiempo no tiene lugar?
            </p>
            <p>
              Cifras fugaces, lágrimas irreversibles,
            </p>
            <p>
              de vapor, que no son nada para el recuerdo.
            </p>
            <p className="ml-5">
              ¿Dónde están?
            </p>
            <p className="ml-25 mb-4">
              ¿Dónde reciben un nombre?
            </p>

            <p>
              Duermo silenciosamente
            </p>
            <p>
              dentro de una <span className="ml-14">mentira</span>
            </p>
            <p>
              Un vacío proyectivo,
            </p>
            <p className="mb-4">
              singularidad de geometría.
            </p>

            <p className="ml-25">
              Prefiero pensar que hay cómo explicarlo todo,
            </p>
            <p>
              fuera de los números, del secreto al que te aferras, inadvertida.
            </p>
            <p className="ml-14">
              Un día voy a descubrir que esas palabras no tienen sentido
            </p>
            <p>
              y que la indiferencia no puede salvarte
            </p>
            <p className="ml-38">
              aunque te escondas en el mundo.
            </p>
            <p className="ml-26 mb-4">
              Ya no puedes escapar de ti.
            </p>
          </div>
        )}
      </div>

      {/* --- Ambiente courrèges --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 3 ? null : 3)}
          className={estilosBoton}
        >
          <span className="font-medium"> Ambiente courrèges </span>
          <span>{abierto === 3 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 3 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Escuchas la voz que se aleja
            </p>
            <p className="mb-4">
              junto con el tiempo y te aferras a ella.
            </p>

            <p>
              Bajo la luz pálida, te has presentado
            </p>
            <p>
              como sombra de noche, atrayéndome a tu centro
            </p>
            <p>
              con esa magia indescriptible: un lazo imaginario,
            </p>
            <p>
              mirada lenta y manos que atraviesan niebla invisible.
            </p>
            <p>
              Eres discreta en esa satisfacción momentánea,
            </p>
            <p>
              y es que no siempre pienso en ti,
            </p>
            <p className="mb-4">
              pero ahora no tienes el amor que crees merecer.
            </p>

            <p>
              Estas partículas de luz se refugian en tu corazón,
            </p>
            <p>
              formando esa repetitiva noche de tu último sueño
            </p>
            <p>
              que no siempre está ahí para complacerte.
            </p>
            <p>
              Eventualmente llega un instante banal 
            </p>
            <p>
              en que te sabes acompañada solo por mi silencio;
            </p>
            <p className="ml-25">
              jadeas, cierras los ojos,
            </p>
            <p className="mb-4">
              y el mundo, en llamas, comienza a desmoronarse.
            </p>

            <p>
              Sientes la pesadez del corazón,
            </p>
            <p>
              el júbilo del recuerdo interrumpido
            </p>
            <p>
              que edifica nuestra realidad,
            </p>
            <p className="mb-4">
              y sonríes al advertir ese abismo.
            </p>

            <p>
              Estas imágenes de lugares desconocidos
            </p>
            <p>
              mueven tu cuerpo hasta que el sol intermitente
            </p>
            <p>
              alcanza cada pensamiento, cada recuerdo.
            </p>
            <p>
              Eso no es lo que te prometieron: un espejo,
            </p>
            <p>
              un alebrije de carne para acompañar el silencio,
            </p>
            <p>
              el cielo húmedo, los ojos cerrados,
            </p>
            <p className="mb-4">
              cuando bailas para todo, para el olvido.
            </p>
          </div>
        )}
      </div>

      {/* --- Luces naranjas --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 4 ? null : 4)}
          className={estilosBoton}
        >
          <span className="font-medium"> Luces naranjas </span>
          <span>{abierto === 4 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 4 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Todo lo que somos
            </p>
            <p className="ml-22">
              cuando llega el atardecer
            </p>
            <br /><br />
            <p className="ml-12">
              bajo las sombras de los edificios
            </p>
            <br/>
            <p className="ml-47">
              solo esa fogata
            </p>
            <br />
            <p className="ml-24">
              ese fuego de chimenea
            </p>
            <br />
            <p className="ml-58">
              esas luces tenues y naranjas
            </p>
            <br />
            <p className="ml-37">
              que apenas iluminan
            </p>
            <br />
            <p className="ml-12">
              cuando entramos en tu habitación
            </p>
            <p className="ml-46">
              y rozo mi piel con la tuya
            </p>
            <br />
            <p className="ml-25">
              cuando se apagan las luces
            </p>
            <br />
            <p className="ml-80">
              y no hay una sola estrella
            </p>
            <p className="ml-47">
              un solo ruido de ciudad
            </p>
            <br /><br />
            <p className="ml-25">
              Solo un cosquilleo
            </p>
            <br />
            <p className="ml-37">
              un calor intenso
            </p>
            <p className="ml-80">
              que nos hace sudar
            </p>
            <br />
            <p className="ml-12">
              y hablar sin hablar
            </p>
            <p className="ml-58">
              bajo la atmósfera nocturna
            </p>
            <br />
            <p className="ml-23">
              bajo estas luces naranjas
            </p>
            <p className="ml-46">
              que no hacen más que susurrar
            </p>
            <br />
            <p>
              ofrecernos un hogar cálido
            </p>
            <p className="ml-23">
              un profundo deseo
            </p>
            <br />
            <p className="ml-80">
              una mirada aguda
            </p>
            <br />
            <p className="ml-37">
              un lugar donde todo culmina
            </p>
            <p className="ml-71">
              y donde el sabor de la noche
            </p>
            <br />
            <p className="ml-23">
              solo se siente cuando todo está en silencio
            </p>
            <br />
            <p>
              Desbaratamos
            </p>
            <br />
            <p className="ml-46">
              nuestras sombras de papel
            </p>
            <p className="ml-23">
              y te recoges hacia el naranja
            </p>
            <p className="ml-71">
              que brilla en tus labios
            </p>
            <br />
            <p>
              Nos acercamos
            </p>
            <br />
            <p className="ml-46">
              te deshaces del silencio
            </p>
            <br />
            <p className="ml-71">
              con la mirada quieta
            </p>
            <p className="ml-34">
              sigues el juego de presencias
            </p>
            <br />
            <p className="ml-46">
              Te dejas caer
            </p>
            <p className="ml-12">
              intento alcanzar tu cabello
            </p>
            <br />
            <p className="ml-37">
              abrazar tu cintura
            </p>
            <p className="ml-12">
              entregarnos al deseo
            </p>
            <br />
            <p className="ml-58">
              abrir tu corazón
            </p>
            <p>
              ¿Puedes ver el fondo del abismo?
            </p>
            <br />
            <p className="ml-46">
              Tus ojos cerrados en una vorágine
            </p>
            <br />
            <p className="ml-23">
              Respiras bruscamente
            </p>
            <p className="ml-92">
              arqueas las cuestas
            </p>
            <br />
            <p className="ml-79">
              el trazo difuminado 
            </p>
            <p className="ml-37">
              en los rastros de luz
            </p>
            <p className="ml-71">
              porque ese es nuestro único antídoto
            </p>
            <br />
            <p className="ml-23">
              Cada instante aceptado
            </p>
            <p className="ml-57">
              refleja en sueños este anochecer
            </p>
            <br />
            <p className="ml-37">
              que guardas entre tus manos
            </p>
            <br />
            <p className="ml-43">
              en lo profundo de una oscuridad imperfecta
            </p>
            <br />
            <p className="ml-57">
              Dentro de la frenética cinta
            </p>
            <p className="ml-23">
              nuestras vidas presurosas se agotan
            </p>
            <br />
            <p className="ml-47">
              y juntas se reestablecen
            </p>
            <p className="ml-37 mb-4">
              en el culminar de las estrellas 
            </p>
          </div>
        )}
      </div>

      {/* --- Lágrimas en casa --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 5 ? null : 5)}
          className={estilosBoton}
        >
          <span className="font-medium"> Lágrimas en casa </span>
          <span>{abierto === 5 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 5 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Hoy no te traigo poemas
            </p>
            <p>
              de flores ni arcoíris.
            </p>
            <p>
              Te traigo palabras sinceras
            </p>
            <p>
              y respuestas concretas,
            </p>
            <p>
              pues preguntas mucho por mi amor
            </p>
            <p>
              y por eso hoy te digo:
            </p>
            <p>
              Te amo.
            </p>
            <p>
              Entiéndelo, no hay nada más,
            </p>
            <p>
              pues eres mi hogar,
            </p>
            <p>
              mi consuelo,
            </p>
            <p>
              mi lugar feliz
            </p>
            <p>
              al que nadie puede entrar,
            </p>
            <p>
              que me pertenece,
            </p>
            <p>
              me cuida y me protege.
            </p>
            <p>
              Me has impulsado,
            </p>
            <p>
              me has cuidado
            </p>
            <p>
              e incluso me has salvado
            </p>
            <p>
              cuando todo estaba
            </p>
            <p>
              sumido en la penumbra
            </p>
            <p>
              y me ahogaba en mis lágrimas.
            </p>
            <p>
              Mi amor,
            </p>
            <p>
              yo siempre estaré aquí
            </p>
            <p>
              como tú lo has estado,
            </p>
            <p>
              y que nunca pase por tu cabeza
            </p>
            <p className="mb-4">
              algo distinto a eso.
            </p>
          </div>
        )}
      </div>

      {/* --- Besos en la distancia --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 6 ? null : 6)}
          className={estilosBoton}
        >
          <span className="font-medium"> Besos en la distancia </span>
          <span>{abierto === 6 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 6 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="ml-13 mt-4">
              … y sobre todo,
            </p>
            <p>
              cuídate mucho,
            </p>
            <p>
              y nunca olvides
            </p>
            <p>
              cuánto te amo.
            </p>
            <p className="ml-13">
              Gracias por todo.
            </p>
            <p>
              Aunque estoy nerviosa,
            </p>
            <p>
              sé que todo va a estar bien,
            </p>
            <p>
              y prometo que todos los días
            </p>
            <p>
              te mandaré besos en la distancia.
            </p>
            <p className="ml-13">
              Ya has llegado muy lejos,
            </p>
            <p>
              solo te queda el último paso.
            </p>
            <p>
              Después de eso,
            </p>
            <p>
              el mundo será tuyo.
            </p>
            <p className="ml-13">
              Ojalá estuvieras aquí,
            </p>
            <p>
              te necesito conmigo.
            </p>
            <p className="ml-13">
              Y créeme que esperaré,
            </p>
            <p>
              sin importar los meses,
            </p>
            <p>
              a que regreses,
            </p>
            <p>
              con los brazos abiertos.
            </p>
            <p className="ml-13">
              No puedo esperar,
            </p>
            <p>
              pero tampoco quiero apresurarlo.
            </p>
            <p className="ml-13">
              Yo sé que lo harás bien,
            </p>
            <p>
              como siempre.
            </p>
            <p>
              Estoy muy orgulloso de ti.
            </p>
            <p className="ml-13">
              No sé qué haría sin ti…
            </p>
            <p>
              (los interrumpen
            </p>
            <p>
              sonidos imperceptibles
            </p>
            <p>
              y voces distantes,
            </p>
            <p>
              casi artificiales)
            </p>
            <p>
              Ya es hora,
            </p>
            <p>
              me tengo que ir.
            </p>
            <p className="ml-13">
              Te dejo,
            </p>
            <p>
              para que vueles a tu destino.
            </p>
            <p>
              Te deseo mucha suerte,
            </p>
            <p>
              te mando muchos besos,
            </p>
            <p>
              cuídate mucho y…
            </p>
            <p className="ml-13">
              … y nunca olvidaré
            </p>
            <p className="mb-4">
              cuánto me amas.
            </p>
          </div>
        )}
      </div>

      {/* --- La brújula Meucci --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 7 ? null : 7)}
          className={estilosBoton}
        >
          <span className="font-medium"> La brújula Meucci </span>
          <span>{abierto === 7 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 7 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="leading-relaxed mt-4 mb-4">
              Me dirijo precipitadamente a la puerta de mi casa. Mis pensamientos me invaden, me provocan un fuerte dolor de cabeza, gritándome a la cara que me abandonaron en mi propio hogar. Finalmente mis decisiones se apoderaron de mis recuerdos y han tenido consecuencias.
            </p>
            <p className="leading-relaxed mb-4">
              Una fuerza inexplicable me ahoga; atasca mi voz, mi saliva, mi respiración.
            </p>
            <p className="leading-relaxed mb-4">
              Abro la puerta y arrojo mis cosas al sofá más cercano, que se encuentra junto a esta. Entonces me apresuro hacia la mesilla del vestíbulo, pensando en qué diré, pero la desesperación y la impotencia me impiden atrapar alguna respuesta.
            </p>
            <p className="leading-relaxed mb-4">
              La abandoné en la enredadera de su cama; quizás piensa que regresaré pronto. En mi zozobra no me permití decirle nada, aunque fue ella quien, sin saberlo, me ayudó a entender lo que sucedía.
            </p>
            <p className="leading-relaxed mb-4">
              En la pequeña pantalla se van dibujando esos números que ya me sé de memoria. Una secuencia de tonos y el silencio se queda con la suerte y el tiempo. El terror me invade, como si mis inquietudes se confirmaran. Tecleo los números una segunda vez y pienso que ya lo sé, que es suficiente para ser un desgraciado.
            </p>
            <p className="leading-relaxed mb-4">
              Cuando me dijo que una excusa barata había sido más que suficiente para engañar a su pareja, sentí como si la pieza faltante hubiera encajado, como si me revelara ese lugar que asumí como un territorio ocupado solo por mí; más bien, como si ella supiera que yo no era el único en él.
            </p>
            <p className="leading-relaxed mb-4">
              Pero ella en realidad no tiene idea, y podría ser solo mi paranoia la que intenta convencerme. Mis viejas sospechas siguen susurrando, y el silencio al teléfono no me da tranquilidad.
            </p>
            <p className="leading-relaxed mb-4">
              Lo intento una vez más, convenciéndome de que será la última. Mi corazón late a una velocidad abrumadora mientras tecleo, pero la llamada se corta apenas al primer tono. Un vacío me consume, corroyendo mi corazón como si se oxidara.
            </p>
            <p className="leading-relaxed mb-4">
              Siempre me convencí de que las señales eran falsas, que mi mente creaba ilusiones a causa de la ansiedad. Pero cuanto más tiempo se pasa con una persona, más comienza a parecerse a uno, y yo me conozco bastante bien. Por eso lo sabía y a la vez nunca fui capaz de darme cuenta: el miedo y la desconfianza no fueron suficientes para hacerme entender que aquella mujer es más parecida a mí de lo que me gustaría.
            </p>
            <p className="leading-relaxed mb-4">
              No quiero decir nada; no hay nada que valga la pena decir. Es tan absurdo molestarse por secretos no muy bien guardados, pero ¿quién es capaz de aguantarse las lágrimas o de soportar la incertidumbre? ¿Quién es capaz de salir ileso de estos juegos perversos?
            </p>
            <p className="leading-relaxed mb-4">
              Acaso nadie sabe que ahora me encuentro aquí, en ninguna parte, frente a una mesilla vieja sobre la que descansa un teléfono que no pienso desconectar, con los párpados cada vez más pesados y dispuesto a morir con los brazos bien abiertos.
            </p>
          </div>
        )}
      </div>

      {/* --- El Sol No Regresa --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 8 ? null : 8)}
          className={estilosBoton}
        >
          <span className="font-medium"> El Sol No Regresa </span>
          <span>{abierto === 8 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 8 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="leading-relaxed mt-4 mb-4">
              Hace pocos días vino a la cantina una mujer joven, delgada y de buena apariencia. Su cabello estaba algo húmedo; había estado lloviendo todo el día, aunque, para esa hora, ya casi no se alcanzaban a escuchar las gotas golpeando la calle.
            </p>
            <p className="leading-relaxed mb-4">
              Se acercó directamente a la barra, algo apresurada. Le ofrecí un cordial «Buenas tardes» que ella contestó mientras se sentaba, antes de decir: «Deme un trago de tequila, por favor».
            </p>
            <p className="leading-relaxed mb-4">
              Asentí con la cabeza y de inmediato me puse a trabajar, cómo no. Al mirarla, despeinada y ausente, algo me decía que tenía una historia que contar. Todos la tienen, digo, pero trabajar en una cantina por tantos años te vuelve experto en reconocer cuando alguien en verdad necesita contarla, y sabes que, si se sienta ahí frente a la barra, es a ti a quien le tocará escucharla. Uno se vuelve muy bueno escuchando, ¿sabes?
            </p>
            <p className="leading-relaxed mb-4">
              En fin, le serví un trago de buen tequila y me paré frente a ella discretamente, simulando que no le ponía atención mientras hacía como que secaba una copa que en realidad nadie había usado en las últimas horas.
            </p>
            <p className="leading-relaxed mb-4">
              Después de un par de minutos y unos tragos, comenzó a hablar, como si supiera que eso era lo que yo estaba esperando, así sin decir nada antes:
            </p>
            <p className="leading-relaxed mb-4">
              —¿Te parece que soy mala persona? ¿Crees que merezco ser tratada como estúpida?
            </p>
            <p className="leading-relaxed mb-4">
              —No, señorita, para nada —contesté con cortesía—, ¿por qué dice eso?
            </p>
            <p className="leading-relaxed mb-4">
              Tomó otro trago de tequila y continuó:
            </p>
            <p className="leading-relaxed mb-4">
              —No es justo que la vida me trate así.
            </p>
            <p className="leading-relaxed mb-4">
              La muchacha comenzó a contarme cómo perdió a la persona que amaba. Que se había ido para siempre y que no la volvería a ver, ya sabes.
            </p>
            <p className="leading-relaxed mb-4">
              —Sírveme otro, ¿no? —decía ella, cada vez con más confianza y olvidándose poco a poco del mundo que la rodeaba en ese momento. Hablaba y bebía, y yo solo la escuchaba y le seguía sirviendo—. Sé que este no es el mejor remedio para aliviar el dolor, pero al menos me servirá para olvidar.
            </p>
            <p className="leading-relaxed mb-4">
              —Entiendo que puede llegar a ser algo doloroso... —dije inocentemente, sin saber cómo animarla y sin intención de ofenderla. Sin embargo, ella insistía en que se encontraba bien y que ya no le importaba lo que había sucedido, que se había olvidado de todo, a pesar de que era evidente que se trataba de todo lo contrario. Tal vez intentaba convencerse a sí misma, pero no pareció funcionar a lo largo de esa tarde.
            </p>
            <p className="leading-relaxed mb-4">
              Daba algo de pena, pero debo admitir que también me parecía algo gracioso que en ocasiones lloraba con una profunda tristeza y en otras afirmaba estar bien, con tanta seguridad que cualquiera le habría creído de no ser por el maquillaje corrido bajo sus ojos. La guerra de sus emociones extendía esas manchas negras hasta sus mejillas.
            </p>
            <p className="leading-relaxed mb-4">
              Me siguió contando cosas que considero incluso personales; ya sabes, viajes de carretera, hoteles, ese tipo de cosas. Dijo que sentía que todos los buenos recuerdos que tenía con aquella persona se estaban perdiendo poco a poco, como si saltaran por la ventana o cayeran por las escaleras, rompiéndose en pedazos.
            </p>
            <p className="leading-relaxed mb-4">
              Al final, dijo que tenía ganas de recostarse en su cama, aunque ya no le transmitiera la misma calidez, seguramente la de alguien que también solía dormir en ella. Que quería llorar hasta quedarse dormida, esperando que eso le aliviara el dolor de cabeza, y creo yo también que de corazón. Pagó sus tragos, dejó como el quince por ciento de propina y se levantó, dispuesta a retirarse.
            </p>
            <p className="leading-relaxed mb-4">
              No sabía si había llegado caminando, en coche, en moto, o si alguien la había traído, pero de igual forma le ofrecí pedirle un taxi, más que nada por cortesía y porque me preocupaba que se metiera en algún problema después de tanto trago o que se mojara con la lluvia que aún caía.
            </p>
            <p className="leading-relaxed mb-4">
              —No, está bien, le agradezco mucho —dijo—. Iré caminando.
            </p>
            <p className="leading-relaxed mb-4">
              Salió del lugar sin permitirme decir nada más, perdiéndose entre las gotas de lluvia que se precipitaban sin mucha fuerza. Me dio pena imaginarla en aquel escenario: llega a su cuarto y se recuesta en la cama, seguramente boca abajo, manchando la almohada con el poco maquillaje que le quedó, las sábanas con la humedad de su ropa. La lluvia se detuvo pronto, tan solo unos minutos después de que se marchó, y el cielo se despejó, aunque dudo que eso la haya salvado de mojarse bastante antes de llegar a casa, especialmente porque ya no había sol que pudiera secar las cálidas gotas que caían por sus mejillas.
            </p>
          </div>
        )}
      </div>

      {/* --- Midori --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 9 ? null : 9)}
          className={estilosBoton}
        >
          <span className="font-medium"> Midori </span>
          <span>{abierto === 9 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 9 && (
          <div className="p-7 bg-white text-right leading-relaxed">
            <p className="mt-4">
              Recuerdos frágiles
            </p>
            <p>
              llenos de restricciones,
            </p>
            <p>
              de mandatos,
            </p>
            <p className="mb-4">
              de divisiones.
            </p>

            <p>
              Uno lo acepta,
            </p>
            <p>
              cree que es lo correcto.
            </p>
            <p className="mb-4">
              Pero entonces apareciste tú.
            </p>

            <p>
              El día que me contaste
            </p>
            <p>
              que tu voz no correspondía
            </p>
            <p>
              al timbre de tu corazón,
            </p>
            <p className="mb-4">
              fue cuando tuve que aceptarlo.
            </p>

            <p>
              Regresaron a mí
            </p>
            <p>
              todos esos recuerdos
            </p>
            <p>
              que presentaban injusticias,
            </p>
            <p>
              temores ajenos,
            </p>
            <p>
              aspiraciones vacías,
            </p>
            <p>
              violencia selectiva,
            </p>
            <p>
              uñas pálidas,
            </p>
            <p>
              cabello oscuro,
            </p>
            <p>
              placeres rebeldes,
            </p>
            <p>
              privilegios binarios,
            </p>
            <p>
              colores intersexuales,
            </p>
            <p>
              rostro sin belleza,
            </p>
            <p>
              lengua rígida,
            </p>
            <p>
              amistades desaprobadas,
            </p>
            <p>
              pecho plano,
            </p>
            <p>
              cuerpo sin músculo,
            </p>
            <p>
              cintura inadecuada,
            </p>
            <p>
              dirección desorientada,
            </p>
            <p>
              rumores falsos,
            </p>
            <p>
              rechazo físico,
            </p>
            <p className="mb-4">
              deseos perdidos.
            </p>

            <p>
              Te confié lo que tú a mí,
            </p>
            <p>
              aunque fuiste mendaz
            </p>
            <p className="mb-4">
              y desapareciste.
            </p>

            <p>
              Pero, gracias a eso,
            </p>
            <p>
              dejé de aferrarme
            </p>
            <p>
              y me dispuse al cambio,
            </p>
            <p>
              a ser libre,
            </p>
            <p className="mb-4">
              al menos conmigo mismo.
            </p>

            <p>
              Ya he podido conocerme,
            </p>
            <p>
              y he descubierto esta nueva libertad,
            </p>
            <p>
              aunque nunca me desencadenaré por completo,
            </p>
            <p className="mb-4">
              porque nunca terminaré de conocerme.
            </p>
          </div>
        )}
      </div>

      {/* --- Estudio de un corazón negro, Op. 2 --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 10 ? null : 10)}
          className={estilosBoton}
        >
          <span className="font-medium"> Estudio de un corazón negro, Op. 2 </span>
          <span>{abierto === 10 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 10 && (
          <div className="p-7 bg-white leading-relaxed">
            <p className="mt-4">
              Concilié la urgencia de decidir la vida
            </p>
            <p>
              como algo externo con la demora,
            </p>
            <p>
              dentro del silencio, donde solo tus ojos podían encontrarme,
            </p>
            <p>
              así que no puedo recuperar lo que fui ni lo que pude ser,
            </p>
            <p>
              solo extrañar esto que soy y no advierto.
            </p>
            <p>
              ¿Quién podría no llorar al ver esa fotografía
            </p>
            <p>
              donde sonríes, donde en tus ojos
            </p>
            <p className="mb-4">
              apenas hay alguna luz? ¿Quién podría dejarte ir?
            </p>
            <p>
              Cuando estoy solo, viendo la oscuridad,
            </p>
            <p>
              eres una de esas supernovas ocultas
            </p>
            <p>
              que me atrapan en el momento en que todo ocurrió
            </p>
            <p className="mb-4">
              alguna vez, alejándome poco a poco de ti.
            </p>
            <p>
              Cuando el cubo de cristal que guardas en tus manos
            </p>
            <p>
              no atrapa suficiente luz y se convierte en un grito,
            </p>
            <p>
              suena ese nocturno; se mancha un corazón
            </p>
            <p className="mb-4">
              y mantiene para sí las piedras de esta laguna.
            </p>
            <p>
              Creo que no he dejado de quererte.
            </p>
            <p className="mb-4">
              Creo que estoy sangrando otra vez.
            </p>
          </div>
        )}
      </div>

      {/* --- Epílogo --- */}
      <div className="rounded-lg overflow-hidden">
        <button
          onClick={() => setAbierto(abierto === 11 ? null : 11)}
          className={estilosBoton}
        >
          <span className="font-medium italic"> Epílogo </span>
          <span>{abierto === 11 ? (<Image src="/Cerrar.svg" alt="Cerrar" width={20} height={20} />) : (<Image src="/Desplegar.svg" alt="Cerrar" width={20} height={20} />)}</span>
        </button>
        {abierto === 11 && (
          <div className="leading-relaxed p-7 bg-white">
            <p className="mt-4 mb-4">
              Después de escribir <span className="italic">Túneles</span> comenzamos a formalizar una serie de ideas que, o bien surgieron tras el proyecto, o fueron descartadas de este. Una de ellas, «El Sol No Regresa», es un sueño creado a partir del nombre de la canción y de algún que otro verso.
            </p>
            <p className="mb-4">
              Nos quedamos únicamente con los diez textos anteriores, que representan la aceptación de cosas apenas descifrables, del hecho de sangrar. Disparar y sangrar. No podemos sino especular sobre si los objetos de nuestros textos son algo más que satélites fuera de órbita, errantes y a merced del azar, encontrándose ocasionalmente. Hay algo fascinante en ello.
            </p>
            <p className="mb-4">
              Acaso esta plaqueta es el cierre, al menos temporal, del ciclo de laberintos y fantasmas que comenzamos hace varios meses. Ya escritos todos estos textos, que ahora no son sino del lector, del tiempo y de nuestra historia, podemos pasar a cosas mejores.
            </p>
            <br />
            <div className="text-right italic">
              <p>
                S. O. F. - V. L. V.
              </p>
              <p className="mb-4">
                Zapopan, 13 de septiembre de 2023
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
