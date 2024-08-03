import { type NextRequest } from "next/server";
import { getCriteriaForUser, getLevel } from "~~/services/criteria";
import { getUser } from "~~/services/user";

export async function GET(request: NextRequest) {
  const user = getUser(request.headers.get("authorization"))!;

  const criteriaForUser = await getCriteriaForUser(user);
  const positiveCriteria = Object.values(criteriaForUser).filter(criteriaValue => criteriaValue).length;

  return Response.json(
    {
      userId: user.id,
      ...criteriaForUser,
      level: getLevel(positiveCriteria),
    },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
}
