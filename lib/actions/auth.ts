"use server";

import { signIn } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) return { success: false, error: result.error };

    return { success: true };
  } catch (error) {
    console.log("Signin error: ", error);
    return { success: false, error: "An error occurred while signing in" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, password, universityId, universityCard } = params;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  // check if user already exists
  if (existingUser.length > 0)
    return { success: false, error: "User already exists" };

  // if user does not exist, create a new user
  const hashedPassword = await hash(password, 10); // hash the password first

  try {
    await db.insert(users).values({
      fullName,
      email,
      password: hashedPassword,
      universityId,
      universityCard,
    });

    await signInWithCredentials({ email, password });
    return { success: true };
  } catch (error) {
    console.log("Signup error: ", error);
    return { success: false, error: "An error occurred while signing up" };
  }
};
