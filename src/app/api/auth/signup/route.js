"use server";
import axios from "axios";
import { BackendUrl } from "../../../utlities/helper";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, organization, fullName } = body;

    // Make request to the backend API to create a new user and return a token
    const response = await axios.post(`${BackendUrl}auth/signup`, {
      email,
      password,
      organization,
      fullName,
    });

    // Extract token and user from the response
    const { token, user } = response.data;

    // Return the token and user back to the client
    return Response.json({ token, user }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Signup failed" }, { status: 400 });
  }
}
