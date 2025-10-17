"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import InputField from "@/component/InputField";
import Button from "@/component/ButtonComp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  // validate function

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    console.log(`your email: ${email} and password:${password}`)
   // navigate to user dashboard

   router.push("/dashboard");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="flex justify-center items-center pb-10 bg-gradient-to-r from-blue-50 to-blue-100 ">
        <div className="border border-gray-200 shadow-lg w-[500px] bg-white mt-[20px] rounded-lg">
          <h1 className="text-center text-2xl font-bold text-black py-4 ">
            Sign in to Continue
          </h1>

          <div className="my-6">
            <h3 className="text-center text-gray-600 pb-3">Continue With</h3>

            <div className="grid grid-cols-2 mx-[25%] gap-3">
              <div className="border border-gray-200 rounded-md py-2 text-3xl flex justify-center">
                <FcGoogle className="cursor-pointer" />
              </div>
              <div className="border border-gray-200 rounded-md py-2 text-3xl flex justify-center">
                <FaFacebook className="cursor-pointer text-blue-700" />
              </div>
            </div>

            <h1 className="text-gray-300 text-center py-3">
              _____________________________ or _____________________________
            </h1>

            <div className="my-4">
              <form
                onSubmit={handleSignIn}
                className="flex flex-col gap-2 mx-[20%]"
              >
                <InputField
                  placeholder="Email or Username"
                  type="email"
                  variant={errors.email?"danger":"primary"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {
                    errors.email &&(
                        <p className="text-red-400 text-[15px] pl-2">{errors.email}</p>
                    )
                }
                <InputField
                  placeholder="Password"
                  type="password"
                  variant={errors.password?"danger":"primary"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  {
                    errors.password &&(
                        <p className="text-red-400 text-[15px] pl-2">{errors.password}</p>
                    )
                }

                <Button label="Sign in" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
