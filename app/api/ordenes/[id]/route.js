import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, { params }) {
  const { id } = params;
  // console.log(params);
  const prisma = new PrismaClient();
  const ordenActualizada = await prisma.orden.update({
    where: {
      id: parseInt(id),
    },
    data: {
      estado: true,
    },
  });
  return NextResponse.json(ordenActualizada);
}
