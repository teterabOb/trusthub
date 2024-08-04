import { type NextRequest } from "next/server";
import { getMatchingUsers } from "~~/services/creteria";

interface Params {
  params: {
    criteriaList: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { criteriaList } = params;

  const criteriaForUser = await getMatchingUsers(criteriaList.split(","));

  return Response.json(criteriaForUser, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
