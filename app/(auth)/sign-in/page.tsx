"use client";

import React from "react";
import AuthForm from "@/components/custom/AuthForm";
import { signInSchema } from "@/lib/validations";
// import { signInWithCredentials } from "@/lib/actions/auth";

const SignInPage = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);

export default SignInPage;
