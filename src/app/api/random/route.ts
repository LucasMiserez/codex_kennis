import data from "@/lib/data.json";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export async function GET() {
  return Response.json(data[getRandomInt(data.length)]);
}
