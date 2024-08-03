import jwt from "jsonwebtoken";

export interface User {
  id: string;
  walletAddress: string;
  residencyId: string;
  linkedinId: string;
  airbnbId: string;
}

export function getUser(header: string | null): User | null {
  const authToken = header?.replace("Bearer ", "");

  if (!authToken) {
    return null;
  }

  return jwt.decode(authToken) as User;
}
