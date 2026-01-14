"use server";

import { logout } from "@/services/users.service";

export async function logoutAction() {
  //some others delete actions
  await logout();
}
