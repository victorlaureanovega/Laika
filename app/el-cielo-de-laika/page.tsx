import Textos from './Textos';

export default function PlaquetaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 tracking-wide pt-30">
        <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto">
                <h1 className="text-center mb-12 text-4xl font-bold mb-4 tracking-wide">El cielo de Laika</h1>
                <br />
                <div className="text-right mb-8 leading-loose">
                    <p>Es que, cuando te disparan, sangras.</p>
                    <p>H. M., <span className="italic">Sputnik, mi amor</span></p>
                </div>
                <br />
            </header>
        
            <Textos />
        
            <div className="max-w-3xl mx-auto mt-8 text-left text-sm leading-loose">
                <br />
                <p className="font-semibold">© Santiago Olivo Franco y Victor Laureano Vega, 2024</p>
                <p>Primera edición: enero de 2024</p>
                <p>Segunda edición: enero de 2025</p>
                <br />
                <p>Traducción del epígrafe de Lourdes Porta y Junichi Matsuura</p>
            </div>

            <br /><br />

            <div className="max-w-3xl mx-auto text-center mt-8">
                <a
                    href="El cielo de Laika.pdf" 
                    download
                    className="inline-flex items-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-500 text-white transition-colors"
                >
                    Descargar PDF
                </a>
            </div>
        </div>
    </div>
  );
}
