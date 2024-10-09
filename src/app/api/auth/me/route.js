"use server";
import { verify } from "jsonwebtoken";
import { BackendUrl } from "../../../utlities/helper"; // Adjust path as needed

export async function GET(req) {
  const headers = await req.headers;
  const token = headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return new Response(JSON.stringify({ message: "No token provided" }), {
      status: 401,
    });
  }

  try {
    // Verify token and extract userId
    const decoded = verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Fetch the user from the Node.js backend
    const response = await fetch(`${BackendUrl}auth/me/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const user = await response.json();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 401,
    });
  }
}
