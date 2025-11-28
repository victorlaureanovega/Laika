import Image from "next/image";

// Ícono de clic fijo en la esquina superior derecha
export default function Clic() {
    return(
        <div>
            <div className="absolute top-2 right-2 z-20">
                <Image
                    src="/Clic.svg"
                    alt="Ícono de clic"
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                />
            </div>
        </div>
    );
}