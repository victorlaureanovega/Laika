import Header from "../components/Header";
import "../css/Home.css";

function Home() {
    return (
        <main className="inicio-main">
            <Header />
            <div className="proyectos">
                <section id="proyecto">
                    <div className="contenedor-general">
                        <img src="Laika.png" alt="Portada de El cielo de Laika" onClick={() => window.open("El cielo de Laika (digital).pdf", "_blank")}/>

                        <div className="contenedor-informacion">
                            <h3>El cielo de Laika</h3>
                            <br />
                            <div className="contenedor-descripcion">
                                <p>
                                    Un hombre se detiene en un páramo. Aguza el oído intentando escuchar algo mientras sueña un laberinto construido alrededor de un jardín. Se precipitan hacia él recuerdos frágiles de lluvia, dolor y piel. Camina temeroso, sosteniendo una pequeña pistola con ambas manos.
                                </p>
                                <p>
                                    Al cabo de incontables minutos, se encuentra con un maniquí. Se exalta, apunta, dispara, falla. Mira fijamente el rostro liso, en busca de ojos. Aprieta sus párpados e imagina que el laberinto se encuentra en una estrella en el espacio exterior. Desde ahí es posible ver la Tierra, la Luna, satélites artificiales orbitando millones de vidas, como globos perdidos en el cielo.
                                </p>
                                <p>
                                    El arma se dispara sola. Para nosotros, que sangramos lentamente hasta el amanecer, ese momento es percibido como la explosión de una supernova.
                                </p>
                                <p>
                                    S. O. F.
                                </p>
                                <p>
                                    V. L. V.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home;
