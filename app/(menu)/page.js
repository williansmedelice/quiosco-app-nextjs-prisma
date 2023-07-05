"use client";
import Producto from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";

function Home() {
  const { categoriaActual } = useQuiosco();
  return (
    <>
      <div>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="my-10 text-2xl">
          Elige y personaliza tu pedido a continuación
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {categoriaActual?.productos?.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
