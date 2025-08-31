import { useNavigate } from "react-router-dom";
import CommonButton from "../components/shared/CommonButton";

function AuthPage() {
  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="mx-5 px-20 py-25 border border-gray-50/10 rounded-xl shadow-xl">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">Add an account</span>
          <p className="text-white opacity-60 text-center my-3">
            Use an existing account, or sign up with a new email. <br />
            Your current account will remain logged in.
          </p>
          <CommonButton
            classname="mt-10"
            label={"Continue with Google"}
            logo={"https://cdn-icons-png.flaticon.com/128/300/300221.png"}
          />
          <CommonButton
            label={"Continue with Apple"}
            logo={"https://cdn-icons-png.flaticon.com/128/179/179309.png"}
          />
          <CommonButton
            label={"Continue with Microsoft"}
            logo={"https://cdn-icons-png.flaticon.com/128/732/732221.png"}
            isLoading={false}
          />
          <CommonButton
            classname={"mt-10 bg-blue-500"}
            label={"Continue"}
            onClick={() => navigate("/dashboard")}
          />
          <div className="w-[320px] mt-2 text-center font-semibold">
            <span>By signing in, you agree to our </span>
            <a
              href="/terms-and-condition"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Terms of Service
            </a>
            <span> and </span>
            <a
              href="/privacy-policy"
              className="text-blue-400 hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>.</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
