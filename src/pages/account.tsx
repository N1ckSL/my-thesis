import React from "react";
import { Header } from "../components/Header";
import { Input } from "../components/UI/Inputs";

interface FormData {
  username: string;
  password: string;
  organization: string;
}

function Account() {
  const [formData, setFormData] = React.useState<FormData>({
    username: "",
    password: "",
    organization: "",
  });
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [organization, setOrganization] = React.useState("");

  const userId = localStorage.getItem("user-id");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    setFormData({ ...formData, username: e.target.value });
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    setFormData({ ...formData, password: e.target.value });
  }

  function handleOrganizationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOrganization(e.target.value);
    setFormData({ ...formData, organization: e.target.value });
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const completedFormData: { [key: string]: any } = {};
    if (username) completedFormData.username = username;
    if (password) completedFormData.password = password;
    if (organization) completedFormData.organization = organization;

    console.log(completedFormData);

    fetch(`http://localhost:8000/users/${userId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(completedFormData),
    })
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });

    ResetForm();
  }

  function ResetForm() {
    setUsername("");
    setPassword("");
    setOrganization("");
  }

  return (
    <>
      <Header />
      <div className="h-full">
        <div className="bg-account bg-center flex items-center justify-center bg-no-repeat bg-contain h-full">
          <div className="container mx-auto py-10 flex items-center">
            <div className="container md:mx-auto m-0 mt-2 w-full min-h-[20rem] md:mt-0 rounded-md md:p-4 p-2">
              <form onSubmit={handleFormSubmit}>
                <div className="rounded-sm p-4 children:mb-6">
                  <Input
                    placeholder="Full name"
                    id="name"
                    required={false}
                    value={username}
                    onChange={handleNameChange}
                  />
                  <Input
                    placeholder="Password"
                    id="password"
                    type="password"
                    required={false}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <Input
                    placeholder="Organization"
                    id="organization"
                    required={false}
                    value={organization}
                    onChange={handleOrganizationChange}
                  />
                  <div className="flex md:block justify-center -w-full">
                    <button className="btn btn-primary w-32" type="submit">
                      Update data
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Account };
