import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title> Victor Laureano Vega y Santiago Olivo Franco </title>
      </head>
      <body>
        <header className="bg-[#070117] px-5 py-16 md:px-20 text-center">
          <h1 className="text-gray-200 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap leading-loose tracking-wide"> Santiago Olivo Franco </h1>
          <h1 className="text-gray-200 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap leading-loose tracking-wide"> Victor Laureano Vega </h1>
        </header>

        {/* Contenido de la página */}
        <main> {children} </main>

        <footer className="bg-[#070117] px-5 py-16 md:px-20 text-left">
          <p className="text-gray-200 font-semibold whitespace-nowrap"> © 2025 Victor y Santiago </p>
        </footer>
      </body>
    </html>
  );
}