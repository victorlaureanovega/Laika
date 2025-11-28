import Link from 'next/link';

export default function Navegacion() {
    return (
        <div>
            <Link
                href="/"
                className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4"
            > Ir a inicio </Link>

            <div className="h-px bg-gray-300 mx-auto w-100 my-8" />
        </div>
    );
}
