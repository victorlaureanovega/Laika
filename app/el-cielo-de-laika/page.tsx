import Textos from './Textos';
import Navegacion from '../Componentes/Navegacion';

// Vista principal de la ruta /el-cielo-de-laika
export default function Laika() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 tracking-wide">
            <div className="container mx-auto px-4">
                {/* Botón de "Ir a inicio", título y epígrafe */}
                <header className="max-w-3xl mx-auto text-center">
                    <Navegacion />

                    <h1 className="text-4xl font-bold text-gray-800"> El cielo de Laika </h1>

                    <div className="text-right mt-12 max-w-xl mx-auto text-gray-600 leading-relaxed">
                        <p> Es que, cuando te disparan, sangras. </p>
                        <p> H. M., <span className="italic"> Sputnik, mi amor </span> </p>
                    </div>
                </header>
            
                {/* Conjunto de tarjetas de acordeón con los textos */}
                <div className="max-w-3xl mx-auto mt-16">
                    <Textos />
                </div>
            
                {/* Información adicional sobre la plaqueta */}
                <div className="max-w-3xl mx-auto mt-16 text-left text-gray-700 text-sm leading-relaxed">
                    <p className="font-semibold"> © Santiago Olivo Franco y Victor Laureano Vega, 2024 </p>
                    <p> Primera edición: enero de 2024 </p>
                    <p> Segunda edición: enero de 2025 </p>
                    <p className="mt-4"> Traducción del epígrafe de Lourdes Porta y Junichi Matsuura </p>
                </div>

                <br />

                {/* Botón de descargar */}
                <div className="max-w-3xl mx-auto text-center mt-8">
                    <a
                        href="El cielo de Laika.pdf" 
                        download
                        className="inline-flex items-center px-8 py-3 border border-gray-700 text-white rounded-md bg-gray-700
                                   hover:bg-gray-600 transition-colors tracking-wide"
                    > Descargar PDF </a>
                </div>
            </div>
        </main>
    );
}
