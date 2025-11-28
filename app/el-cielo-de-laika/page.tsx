import Textos from './Textos';
import Navegacion from '../Componentes/Navegacion';

export default function PlaquetaPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-20 tracking-wide">
            <div className="container mx-auto px-4">
                <header className="max-w-3xl mx-auto text-center">
                    <Navegacion />

                    <h1 className="text-5xl font-bold text-gray-800"> El cielo de Laika </h1>
                    <div className="text-right mt-12 max-w-xl mx-auto text-gray-600 leading-relaxed">
                        <p> Es que, cuando te disparan, sangras. </p>
                        <p> H. M., <span className="italic"> Sputnik, mi amor </span> </p>
                    </div>
                </header>
            
                <div className="max-w-3xl mx-auto mt-16">
                    <Textos />
                </div>
            
                <div className="max-w-3xl mx-auto mt-16 text-left text-gray-700 text-sm leading-relaxed">
                    <p className="font-semibold"> © Santiago Olivo Franco y Victor Laureano Vega, 2024 </p>
                    <p> Primera edición: enero de 2024 </p>
                    <p> Segunda edición: enero de 2025 </p>
                    <p className="mt-4"> Traducción del epígrafe de Lourdes Porta y Junichi Matsuura </p>
                </div>

                <br />

                <div className="max-w-3xl mx-auto text-center mt-8">
                    <a
                        href="El cielo de Laika.pdf" 
                        download
                        className="inline-flex items-center px-8 py-3 border border-gray-700 text-gray-700 rounded-md hover:bg-gray-700
                                   hover:text-white transition-colors tracking-wide">
                        Descargar PDF
                    </a>
                </div>
            </div>
        </main>
    );
}
