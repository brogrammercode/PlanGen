import z from "zod";
import { useState, type FormEvent } from "react";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import SecondaryButton from "../../components/ui/Button/SecondaryButton";
import Field from "../../components/ui/Field/Field";
import { loginSchema } from "../../utils";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validateForm = (): boolean => {
    try {
      loginSchema.parse({ email, password });
      setValidationError({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: { email?: string; password?: string } = {};
        err.issues.forEach((error) => {
          if (error.path[0] === "email") {
            errors.email = error.message;
          } else if (error.path[0] === "password") {
            errors.password = error.message;
          }
        });
        setValidationError(errors);
      }
      return false;
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!validateForm()) return;
    try {
    } catch (error) {}
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-80 flex flex-col items-start justify-start mb-10 font-semibold text-2xl ">
        <h2 className="text-gray-800">Your Success Architect</h2>
        <h1 className="text-gray-500">Login to Plagen</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <SecondaryButton className="w-80 mb-2" onClick={() => {}}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt="google"
            className="h-4"
          />
          <span className="ml-15">Continue with Google</span>
        </SecondaryButton>
        <SecondaryButton className="w-80 mb-2" onClick={() => {}}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/0/747.png"
            alt="apple"
            className="h-4"
          />
          <span className="ml-15">Continue with Apple</span>
        </SecondaryButton>
        <div className="w-80 mt-2 mb-7 bg-gray-100 h-[1px]" />
        <Field
          className="w-80 mb-3"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address..."
          label="Email"
        />
        <Field
          className="w-80 mb-2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          label="Password"
        />
        <PrimaryButton label={"Continue"} className="w-80 mt-5"></PrimaryButton>
      </form>
      <div className="w-80 text-center text-[12px] mt-4 text-gray-400">
        <span>
          {
            "By continuing, you acknowledge that you understand and agree to the "
          }
        </span>
        <span className="underline cursor-pointer hover:text-blue-400">
          Terms & Conditions
        </span>
        <span> and </span>
        <span className="underline cursor-pointer hover:text-blue-400">
          Privacy Policy
        </span>
      </div>
      <div className="mb-30"></div>
    </div>
  );
};

export default LoginPage;
