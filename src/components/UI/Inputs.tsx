import React from "react";
import { EmailSVG, EyeSlashSVG, EyeSVG, KeySVG } from "../../static/icons";

export const EmailInput = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className={`relative text-black w-full focus-within:text-gray-400 shadow-lg focus-within:shadow-lg ${className}`}
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <EmailSVG className="w-8 h-8 pointer-events-none" />
          </button>
        </span>
        <input
          type="search"
          className={`py-4 text-sm text-black bg-[#DBDBDB] rounded-md pl-20 pr-10 focus:outline-none focus:shadow placeholder-black w-full`}
          placeholder="Email"
        />
      </div>
    </>
  );
};

export const EmailInputWithLabel = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`md:w-96 w-64 relative group rounded-sm ${className}`}>
        <span className="absolute instet-y-0 left-0 flex-items-center pl-4">
          <EmailSVG className="flex items-center my-3 w-6 h-6" />
        </span>
        <input
          type="search"
          id="email"
          required
          className="w-full h-12 px-4 pl-16 text-sm peer group-focus-within:border group-focus-within:border-[#6C63FF] rounded-sm bg-[#DBDBDB] outline-none"
        />

        <label
          htmlFor="email"
          className="transform transition-all absolute top-0 left-14 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-0 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-0 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Email
        </label>
      </div>
    </>
  );
};

export const PasswordInputWithLabel = ({
  className,
}: {
  className?: string;
}) => {
  const [passwordType, setPasswordType] = React.useState("password");
  const [passwordInput, setPasswordInput] = React.useState("");

  const handlePasswordChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <div className={`md:w-96 w-64 relative group rounded-sm ${className}`}>
        <span className="absolute instet-y-0 left-0 flex-items-center pl-4">
          <KeySVG className="flex items-center my-3 w-6 h-6" />
        </span>
        <input
          type={passwordType}
          id="password"
          required
          value={passwordInput}
          onChange={handlePasswordChange}
          className="w-full h-12 px-4 pl-16 text-sm peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
        />

        <label
          htmlFor="password"
          className="transform transition-all absolute top-0 left-14 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-0 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-0 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Password
        </label>
        <span
          className="absolute instet-y-0 right-0 flex-items-center pr-4"
          onClick={togglePassword}
        >
          {passwordType === "password" ? (
            <EyeSVG className="flex items-center my-3 w-6 h-6 cursor-pointer" />
          ) : (
            <EyeSlashSVG className="flex items-center my-3 w-6 h-6 cursor-pointer" />
          )}
        </span>
      </div>
    </>
  );
};
