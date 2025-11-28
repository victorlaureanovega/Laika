import Image from "next/image";
import Link from "next/link";
import Clic from "../Componentes/Clic";
import "../globals.css";

// Atributos establecidos para cada proyecto que se muestra en el sitio
interface Proyecto {
    titulo: string;
    descripcion: string[];
    imagen: string;
    enlace: string;
    indice: number;
}

export default function Proyecto({ titulo, descripcion, imagen, enlace, indice }: Proyecto) {
    const esExterno = enlace.startsWith("http");    // Para saber si el enlace pertenece a una página externa
    let primeraInicialAplicada = false;             // Para eliminar el espacio al principio de cada párrafo, salvo del primero (para separarlo del título del proyecto)
    
    return (
        // Los proyectos en posición par tienen un fondo más claro, mientras que los otros tienen uno grisáceo
        <div className={`${indice % 2 === 0 ? "bg-[#F8F9FA] text-[#212529] md:flex-row-reverse" : "bg-[#343A40] text-[#DEE2E6] md:flex-row"}
                         flex flex-col md:flex-row items-center md:items-left p-6 md:p-14 gap-8 md:gap-20 px-4 md:px-30 py-10 md:py-20`}
        >
            {/* Si el enlace es externo, se redirige el usuario a ese enlace; si no, se le lleva a la página correspondiente dentro del sitio */}
            {esExterno ? (
                <a href={enlace} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-[300px] h-[500px] md:w-[350px] md:h-[550px] overflow-hidden rounded-lg
                                    transition-transform duration-300 hover:scale-102">
                        {/* Portada del proyecto */}
                        <Image
                            src={imagen}
                            alt={titulo}
                            fill
                        />

                        <Clic />
                    </div>
                </a>
            ) : (
                <Link href={enlace}>
                    <div className="relative w-[300px] h-[500px] md:w-[350px] md:h-[550px] overflow-hidden rounded-lg
                                    transition-transform duration-300 hover:scale-102">
                        {/* Portada del proyecto */}
                        <Image
                            src={imagen}
                            alt={titulo}
                            fill
                        />

                        <Clic />
                    </div>
                </Link>
            )}

            {/* Descripción del proyecto */}
            <div className="md:text-left w-full px-4 md:px-0 mt-8 md:mt-0">
                <h3 className="text-xl md:text-2xl font-semibold mb-2"> {titulo} </h3>
                <br /><br />

                {descripcion.map((parrafo, i) => {
                    const esInicial = /^[A-Z]\.?(\s[A-Z]\.?)*$/.test(parrafo.trim());

                    const aplicarEspacio = esInicial && !primeraInicialAplicada;
                    if (aplicarEspacio) {
                        // Identificar la primera letra del texto de descripción
                        primeraInicialAplicada = true;
                    }

                    return (
                        // Se aplica el espacio antes de esa primera letra
                        <p
                            key={i}
                            className={`text-base md:text-lg leading-loose ${aplicarEspacio ? "mt-6 md:mt-10" : ""}`}
                        >
                            {parrafo}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}
