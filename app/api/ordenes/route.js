import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener Ordenes
export async function GET(req) {
  //   console.log("BODY: ", await req.json());
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });
  return NextResponse.json(ordenes);
}

// Crear Ordenes
export async function POST(req) {
  //   console.log("BODY: ", await req.json());

  const { nombre, fecha, total, pedido } = await req.json();

  const orden = await prisma.orden.create({
    data: {
      nombre,
      fecha,
      total,
      pedido,
    },
  });
  return NextResponse.json(orden);
}
