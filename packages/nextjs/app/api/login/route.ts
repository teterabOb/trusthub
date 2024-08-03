import jwt from "jsonwebtoken";

export function POST() {
  const sessionData = {
    userId: "1",
    walletAddress: "sdadsadassdsaads",
    residencyId: "1",
    linkedinId: "1",
  };

  const authToken = jwt.sign(sessionData, "secret");

  return Response.json(
    { authToken },
    {
      status: 200,
    },
  );
}
