"use server";

import { revalidatePath } from "next/cache";

export async function addRequest(data) {
  let add = await fetch(`${process.env.BASE_URL}api/requests`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  add = add.json();

  return add;
}

export async function getRequest() {
  let requests = await fetch(`${process.env.BASE_URL}api/requests`);
  requests = requests.json();

  return requests;
}
