import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonWithProps } from "../components/UI/button/Button";
import {
  EmailInputWithLabel,
  PasswordInputWithLabel,
} from "../components/UI/Inputs";
import { ThesisLogo } from "../static/icons";
import { toast } from "react-toastify";
import Typewriter from "typewriter-effect";

function Login() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showFormError, setShowFormError] = React.useState(false);

  const navigate = useNavigate();

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  }

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  }

  function handleLogin(e: any) {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        if (resp.user) {
          localStorage.setItem("username", resp.user.name);
          localStorage.setItem("organization", resp.user.organization);
          localStorage.setItem("user-id", resp.user.id);
          navigate("/");
        } else setShowFormError(true);
      })
      .catch((err) => {
        console.log(err);

        toast.error("Failed :" + err.message);
      });
  }

  React.useEffect(() => {
    setTimeout(() => {
      setShowFormError(false);
    }, 2500);
  }, [showFormError]);

  return (
    <>
      <div className="container mx-auto md:flex items-center justify-center h-screen bg-[#FCFDFD]">
        <div className="md:block flex flex-wrap flex-col items-center md:mb-0 mb-8">
          <Link to="/" className="flex items-center justify-center my-10">
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
            <form onSubmit={handleLogin}>
              <div className="container mx-auto">
                <div className="container mx-auto boreder rounded-sm flex flex-col gap-8 items-center justify-center">
                  <EmailInputWithLabel
                    name="username"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <PasswordInputWithLabel
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="flex justify-center items-center">
                  {showFormError && (
                    <div className="w-fit bg-red-400 rounded-sm text-white mt-4 px-4 py-2">
                      Please check your credentials and try again
                    </div>
                  )}
                </div>
                <div className="flex justify-center w-full mt-10">
                  <ButtonWithProps
                    className="bg-[#6C63FF] text-white"
                    type="submit"
                  >
                    Login
                  </ButtonWithProps>
                </div>
                <p className="flex justify-center mt-2">
                  Don't have an account?{" "}
                  <span>
                    <Link to="/register" className="text-[#6C63FF] ml-2">
                      Register
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const initialFormData = {
  email: "",
  password: "",
};

export { Login };
