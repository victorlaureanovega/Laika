import Image from "next/image";
import Link from "next/link";
import "../globals.css";

interface Proyecto {
    titulo: string;
    descripcion: string[];
    imagen: string;
    enlace: string;
    indice: number;
}

export default function Proyecto({ titulo, descripcion, imagen, enlace, indice }: Proyecto) {
    const esExterno = enlace.startsWith("http");
    let primeraInicialAplicada = false;
    
    return (
        <div className={`${indice % 2 === 0 ? "" : "normal"} flex flex-col md:flex-row items-center md:items-left p-6 md:p-14 gap-8 md:gap-20
                        ${indice % 2 === 0 ? "bg:white md:flex-row-reverse" : "md:flex-row"} px-4 md:px-30 py-10 md:py-20`}
        >
            {esExterno ? (
                <a href={enlace} target="_blank" rel="noopener noreferrer">
                    <div className="relative w-[300px] h-[500px] md:w-[350px] md:h-[550px] overflow-hidden rounded-lg
                                    transition-transform duration-300 hover:scale-102">
                        <Image
                            src={imagen}
                            alt={titulo}
                            fill
                        />
                    </div>
                </a>
            ) : (
                <Link href={enlace}>
                    <div className="relative w-[300px] h-[500px] md:w-[350px] md:h-[550px] overflow-hidden rounded-lg
                                    transition-transform duration-300 hover:scale-102">
                        <Image
                            src={imagen}
                            alt={titulo}
                            fill
                        />
                    </div>
                </Link>
            )}
            <div className="md:text-left w-full px-4 md:px-0 mt-8 md:mt-0">
                <h3 className="text-xl md:text-2xl font-semibold mb-2"> {titulo} </h3>
                <br /><br />
                {descripcion.map((parrafo, i) => {
                    const esInicial = /^[A-Z]\.?(\s[A-Z]\.?)*$/.test(parrafo.trim());

                    const aplicarEspacio = esInicial && !primeraInicialAplicada;
                    if (aplicarEspacio) primeraInicialAplicada = true;

                    return (
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