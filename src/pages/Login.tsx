import { Link } from "react-router-dom";
import { ButtonWithProps } from "../components/UI/button/Button";
import {
  EmailInputWithLabel,
  PasswordInputWithLabel,
} from "../components/UI/Inputs";
import { ThesisLogo } from "../static/icons";

import Typewriter from "typewriter-effect";

function Login() {
  return (
    <>
      <div className="container mx-auto md:flex items-center justify-center h-screen">
        <div className="md:block flex flex-wrap flex-col items-center md:mb-0 mb-8">
          <Link to="/" className="flex items-center justify-center py-10">
            <ThesisLogo />
          </Link>
          <div className="text-xl font-bold relative">
            We make complicated things{" "}
            <span className="md:absolute md:left-16 text-xl font-bold text-[#6C63FF] inline-flex w-max">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Easier")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Prettier")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Better.")
                    .start();
                }}
              />
            </span>
          </div>
        </div>
        <div className="container mx-auto bg-login bg-center bg-no-repeat">
          <div className="h-full justify-center items-center bg-[#ffffff9d]">
            <h1 className="w-full flex justify-center font-bold pt-24 mb-32 text-[#0D0D0D]">
              Welcome
            </h1>
            <form action="post">
              <div className="container mx-auto">
                <div className="container mx-auto boreder rounded-sm flex flex-col gap-8 items-center justify-center">
                  <EmailInputWithLabel className="" />
                  <PasswordInputWithLabel className="" />
                </div>
                <div className="flex justify-center w-full mt-10">
                  <ButtonWithProps className="bg-[#6C63FF] text-white">
                    Login
                  </ButtonWithProps>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { Login };
