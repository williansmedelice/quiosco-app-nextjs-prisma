"use client";
import axios from "axios";
import useSWR from "swr";
import Orden from "@/components/Orden";

function PageAdmin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {
    refreshInterval: 100,
  });
  //   console.log("DATA: ", data);
  //   console.log("ERROR: ", error);
  //   console.log("LOADING: ", isLoading);
  return (
    <>
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Admninistra las ordenes</p>
      {data && data.length ? (
        data.map((orden) => <Orden key={orden.id} orden={orden} />)
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </>
  );
}

export default PageAdmin;
