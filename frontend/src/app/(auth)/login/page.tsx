import React from "react";
import logo_bolt from "./logo_bolt.png";
import Welcome_doctor_young_1 from "./Welcome_doctor_young_1.png";
import Image from "next/image";
import LoginButton from "@/components/LoginPage/LoginButton";

function Login() {
  return (
    <main className="flex min-h-screen flex-grow justify-center">
      <div className="flex flex-col justify-center px-2 py-12 sm:px-4 lg:px-20 xl:px-24">
        <div className="mx-auto max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Image className="h-40 w-40" src={logo_bolt} alt="Your Company" />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Connectez vous
            </h2>
          </div>

          <div className="mt-10">
            <div className="mt-10">
              <div className="mt-6 grid grid-cols-1 gap-4">
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className=" absolute inset-0 h-full w-full object-cover"
          src={Welcome_doctor_young_1}
          alt=""
        />
      </div>
    </main>
  );
}

export default Login;
