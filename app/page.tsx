import Proyecto from "./Componentes/Proyecto";
import proyectos from "./proyectos.json";

// Página principal. Se incluye cada proyecto del archivo JSON
export default function Home() {
  return (
    <main className="tracking-wide">
      <section id="proyectos">
        {proyectos.map((p, i) => (
          <Proyecto
            key={i}
            titulo={p.titulo}
            descripcion={p.descripcion}
            imagen={p.imagen}
            enlace={p.enlace}
            indice={i}
          />
        ))}
      </section>
    </main>
  );
}
