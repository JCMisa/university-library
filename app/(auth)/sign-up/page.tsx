"use client";

import AuthForm from "@/components/custom/AuthForm";
import { signUpSchema } from "@/lib/validations";
// import { signUp } from "@/lib/actions/auth";

const SignUpPage = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);

export default SignUpPage;
