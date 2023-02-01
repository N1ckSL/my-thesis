import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonWithProps } from "../components/UI/button/Button";
import {
  CustomRadioButton,
  EmailInputWithLabel,
  OrganizationInputWithLabel,
  PasswordInputWithLabel,
  UserInputWithLabel,
} from "../components/UI/Inputs";
import { ThesisLogo } from "../static/icons";
import Typewriter from "typewriter-effect";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [role, setRole] = React.useState("");

  const navigate = useNavigate();

  function handleNameChange(e: any) {
    setFullName(e.target.value);
    setFormData({ ...formData, name: e.target.value });
  }
  function handleEmailChange(e: any) {
    setEmail(e.target.value);
    setFormData({ ...formData, email: e.target.value });
  }

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  }

  function handleOrganizationChange(e: any) {
    setOrganization(e.target.value);
    setFormData({ ...formData, organization: e.target.value });
  }

  function handleRoleChange(e: any) {
    setRole(e.currentTarget.value);
    setFormData({ ...formData, role: e.currentTarget.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        navigate("/login");
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        toast.error("Failed :" + err.message);
      });
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
            <form onSubmit={handleSubmit}>
              <div className="container mx-auto flex flex-col items-center">
                <div className="container mx-auto boreder rounded-sm flex flex-col gap-8 items-center justify-center">
                  <UserInputWithLabel
                    className=""
                    name="username"
                    value={fullName}
                    onChange={handleNameChange}
                  />
                  <EmailInputWithLabel
                    className=""
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <PasswordInputWithLabel
                    className=""
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <OrganizationInputWithLabel
                    name="organization"
                    value={organization}
                    onChange={handleOrganizationChange}
                  />

                  <div className="flex flex-wrap md:gap-12 gap-8">
                    <CustomRadioButton
                      id="student"
                      name="student"
                      value="student"
                      checked={role === "student"}
                      onChange={handleRoleChange}
                    >
                      Student
                    </CustomRadioButton>
                    <CustomRadioButton
                      id="professor"
                      name="professor"
                      value="professor"
                      checked={role === "professor"}
                      onChange={handleRoleChange}
                    >
                      Professor
                    </CustomRadioButton>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-10">
                  <ButtonWithProps
                    className="bg-[#6C63FF] text-white"
                    type="submit"
                  >
                    Register
                  </ButtonWithProps>
                </div>
              </div>
              <p className="flex items-center justify-center mt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-[#6C63FF] ml-2">
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

const initialFormData = {
  name: "",
  email: "",
  password: "",
  organization: "",
  role: "",
};

export { Register };
