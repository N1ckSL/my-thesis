import { Link } from "react-router-dom";
import { ButtonWithProps } from "../components/UI/button/Button";
import {
  CustomRadioButton,
  EmailInputWithLabel,
  OrganizationInputWithLabel,
  PasswordInputWithLabel,
} from "../components/UI/Inputs";
import { ThesisLogo } from "../static/icons";
import Typewriter from "typewriter-effect";

function Register() {
  function handleClick(e: any) {
    console.log(e);
  }

  return (
    <>
      <div className="container mx-auto md:flex items-center justify-center h-screen">
        <div className="md:block flex flex-wrap flex-col items-center md:mb-0 mb-8">
          <Link to="/" className="flex items-center justify-center py-10">
            <ThesisLogo />
          </Link>
          <div className="text-xl font-bold relative">
            Register to get access to{" "}
            <span className="md:absolute md:left-8 text-xl font-bold text-[#6C63FF] inline-flex w-max">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Creating")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Editing")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Publishing")
                    .start();
                }}
              />
            </span>
            <span className="absolute left-36">theses.</span>
          </div>
        </div>
        <div className="container mx-auto bg-login bg-center bg-no-repeat">
          <div className="h-full justify-center items-center bg-[#ffffff9d]">
            <h1 className="w-full flex justify-center font-bold pt-24 mb-32 text-[#0D0D0D]">
              Register
            </h1>
            <form action="post">
              <div className="container mx-auto flex flex-col items-center">
                <div className="container mx-auto boreder rounded-sm flex flex-col gap-8 items-center justify-center">
                  <EmailInputWithLabel className="" />
                  <PasswordInputWithLabel className="" />
                  <OrganizationInputWithLabel className="" />

                  <div className="flex flex-wrap md:gap-12 gap-8">
                    <CustomRadioButton>Student</CustomRadioButton>
                    <CustomRadioButton>Professor</CustomRadioButton>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-10">
                  <ButtonWithProps className="bg-[#6C63FF] text-white">
                    Register
                  </ButtonWithProps>
                </div>
              </div>
              <p className="flex items-center justify-center mt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-[#6C63FF] ml-2">
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { Register };
