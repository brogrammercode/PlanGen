import PrimaryButton from "../../components/ui/Button/PrimaryButton";
import SecondaryButton from "../../components/ui/Button/SecondaryButton";
import Field from "../../components/ui/Field/Field";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-80 flex flex-col items-start justify-start mb-10 font-semibold text-2xl ">
        <h2 className="text-gray-800">Your Success Architect</h2>
        <h1 className="text-gray-500">Login to Plagen</h1>
      </div>
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
        className="w-80 mb-2"
        type="email"
        placeholder="Enter your email address..."
        label="Email"
      />
      <PrimaryButton label={"Continue"} className="w-80 mt-5"></PrimaryButton>
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
