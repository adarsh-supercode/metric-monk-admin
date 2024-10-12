"use server";
import axios from "axios";
import { BackendUrl } from "../../../utlities/helper";

export async function POST(req) {
  const { projectName, propertyId, userId } = await req.json();

  try {
    const response = await axios.post(`${BackendUrl}projects/create`, {
      projectName,
      propertyId,
      userId,
    });

    return Response.json(response.data, { status: 201 });
  } catch (error) {
    return Response.json(
      { message: "Error creating project" },
      { status: 400 }
    );
  }
}
