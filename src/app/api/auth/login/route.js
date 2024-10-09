"use server";
import axios from "axios";
import { BackendUrl } from "../../../utlities/helper";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const response = await axios.post(`${BackendUrl}auth/login`, {
      email,
      password,
    });
    const { token, user } = response.data;
    return Response.json({ token, user }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Invalid credentials" }, { status: 400 });
  }
}
