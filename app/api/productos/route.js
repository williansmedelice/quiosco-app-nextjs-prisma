import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  const prisma = new PrismaClient();
  const productos = await prisma.producto.findMany({
    where: {
      categoriaId: 1,
    },
  });
  return NextResponse.json(productos);
}
