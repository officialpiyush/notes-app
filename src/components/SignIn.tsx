import { useSignInEmailPassword } from "@nhost/react";
import clsx from "clsx";
import { useState } from "react";
import GenerateInput from "./GenerateInput";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInEmailPassword, error } = useSignInEmailPassword();

  const handleSubmit = async () => {
    await signInEmailPassword(email, password);
  };

  return (
    <div className="py-24">
      <div className="card w-xl border-2 border-stone-700 shadow-xl">
        <figure className="w-full bg-white">
          <img
            src="https://raw.githubusercontent.com/nhost/nhost/main/assets/logo.png"
            alt="Shoes"
          />
        </figure>
        <div
          className={clsx(
            "mt-4 mx-auto",
            "w-3/4 flex items-center justify-center",
            "alert alert-error shadow-md",
            "transition transition-all duration-300",
            error && error.message.length ? "block" : "hidden",
          )}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error?.message}</span>
          </div>
        </div>
        <div className="-mt-3 gap-4 card-body items-center">
          <div className="form-control w-full max-w-xs gap-6">
            <GenerateInput
              name="Email"
              type="email"
              state={email}
              setState={setEmail}
            />
            <GenerateInput
              name="Password"
              type="password"
              state={password}
              setState={setPassword}
            />
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-wide btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
