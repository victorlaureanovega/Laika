import Link from 'next/link';

// Barra de navegación para las páginas que no son la principal
export default function Navegacion() {
    return (
        <div>
            <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4"
            > Ir a inicio </Link>

            {/* Separador */}
            <div className="h-px bg-gray-300 mx-auto w-2/3 my-8" />
        </div>
    );
}
