import * as React from "react";
import {
  EducationSVG,
  EmailSVG,
  EyeSlashSVG,
  EyeSVG,
  KeySVG,
  UserSVG,
} from "../../static/icons";

export const Input = ({
  className,
  placeholder,
  id,
  type = "text",
  value,
  defaultValue,
  required,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  id?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  required: boolean;
  onChange?: (e: any) => void;
}) => {
  return (
    <div className={`md:w-96 w-full relative group rounded-sm ${className}`}>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full h-12 px-4 text-sm peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
      />

      <label
        htmlFor={id}
        className="transform transition-all absolute top-0 left-4 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-2 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-2 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
      >
        {placeholder}
      </label>
    </div>
  );
};

export const TextArea = ({
  className,
  placeholder,
  id,
  value,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  id?: string;
  value?: string;
  onChange?: (e: any) => void;
}) => {
  const hasContent = value?.trim()?.length === 0;

  return (
    <div
      className={`w-full relative group rounded-sm ${
        className ? className : ""
      }`}
    >
      <textarea
        id={id}
        required
        value={value}
        onChange={onChange}
        className="resize-none w-full h-32 px-4 py-2 peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
      />

      <label
        htmlFor={id}
        className={`transform transition-all absolute ${
          hasContent ? "-top-12" : "top-6"
        }  left-4 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-2 group-focus-within:top-6 peer-valid:text-xs peer-valid:left-2 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export const UserInputWithLabel = ({
  value,
  className,
  name,
  onChange,
}: {
  value: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}) => {
  return (
    <div className={`md:w-96 w-64 relative group rounded-sm ${className}`}>
      <span className="absolute instet-y-0 left-0 flex-items-center pl-4">
        <UserSVG className="flex items-center my-3 w-6 h-6" />
      </span>
      <input
        type="text"
        id="name"
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-full h-12 px-4 pl-16 text-sm peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
      />

      <label
        htmlFor="name"
        className="transform transition-all absolute top-0 left-14 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-0 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-0 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
      >
        Full Name
      </label>
    </div>
  );
};

export const EmailInputWithLabel = ({
  value,
  className,
  name,
  onChange,
}: {
  value: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}) => {
  return (
    <div className={`md:w-96 w-64 relative group rounded-sm ${className}`}>
      <span className="absolute instet-y-0 left-0 flex-items-center pl-4">
        <EmailSVG className="flex items-center my-3 w-6 h-6" />
      </span>
      <input
        type="text"
        id="email"
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-full h-12 px-4 pl-16 text-sm peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
      />

      <label
        htmlFor="email"
        className="transform transition-all absolute top-0 left-14 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-0 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-0 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
      >
        Email
      </label>
    </div>
  );
};

export const PasswordInputWithLabel = ({
  value,
  className,
  name,
  onChange,
}: {
  value: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}) => {
  const [passwordType, setPasswordType] = React.useState("password");

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
          name={name}
          required
          value={value}
          onChange={onChange}
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

export const OrganizationInputWithLabel = ({
  value,
  className,
  name,
  onChange,
}: {
  value: string;
  className?: string;
  name?: string;
  onChange?: (e: any) => void;
}) => {
  return (
    <div className={`md:w-96 w-64 relative group rounded-sm ${className}`}>
      <span className="absolute instet-y-0 left-0 flex-items-center pl-4">
        <EducationSVG className="flex items-center my-3 w-6 h-6" />
      </span>
      <input
        type="text"
        id="organization"
        name={name}
        value={value}
        required
        onChange={onChange}
        className="w-full h-12 px-4 pl-16 text-sm peer rounded-sm group-focus-within:border group-focus-within:border-[#6C63FF] bg-[#DBDBDB] outline-none"
      />

      <label
        htmlFor="organization"
        className="transform transition-all absolute top-0 left-14 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:left-0 group-focus-within:top-0 peer-valid:text-xs peer-valid:left-0 group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
      >
        Organization
      </label>
      <span className="absolute instet-y-0 right-0 flex-items-center pr-4"></span>
    </div>
  );
};

export const CustomRadioButton = ({
  children,
  name,
  value,
  id,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  name?: string;
  id?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
}) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className="w-10 h-10 text-purple-600 bg-gray-100 border-gray-300 hover:accent-[#6C63FF] accent-[#6C63FF] focus:outline-none focus-visible:ring focus:border-[#6C63FF]"
      />
      <label
        htmlFor="purple-radio"
        className="ml-2 font-medium text-black pt-2"
      >
        {children}
      </label>
    </div>
  );
};
