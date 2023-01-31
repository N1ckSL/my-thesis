import * as React from "react";
import { Header } from "../components/Header";
import { Input, TextArea } from "../components/UI/Inputs";

function CreateThesis() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [coordinator, setCoordinator] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [shortDescription, setShortDescription] = React.useState("");
  const [fullDescription, setFullDescription] = React.useState("");
  const [createdBy, setCreatedBy] = React.useState("");

  React.useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setCreatedBy(storedUsername);
    }
  }, []);

  function handleTitleChange(e: any) {
    setTitle(e.target.value);
    setFormData({ ...formData, title: e.target.value });
  }

  function handleAuthorChange(e: any) {
    setAuthor(e.target.value);
    setFormData({ ...formData, author: e.target.value });
  }

  function handleCoordinatorChange(e: any) {
    setCoordinator(e.target.value);
    setFormData({ ...formData, coordinator: e.target.value });
  }

  function handleCategoryChange(e: any) {
    setCategory(e.currentTarget.value);
    setFormData({ ...formData, category: e.currentTarget.value });
  }

  function handleShortDescriptionChange(e: any) {
    setShortDescription(e.currentTarget.value);
    setFormData({ ...formData, shortDescription: e.currentTarget.value });
  }

  function handleFullDescriptionChange(e: any) {
    setFullDescription(e.currentTarget.value);
    setFormData({ ...formData, fullDescription: e.currentTarget.value });
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();

    fetch("http://localhost:8000/thesis/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
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
    setTitle("");
    setAuthor("");
    setCoordinator("");
    setCategory("");
    setShortDescription("");
    setFullDescription("");
    setCreatedBy("");
  }

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="bg-listing bg-center bg-no-repeat bg-contain h-full">
          <div className="container mx-auto">
            <div className="container ">
              <h1 className="mt-10 mb-2 pl-4 font-bold">Create new Thesis</h1>
              <form
                className="bg-gray-200/50 container md:mx-auto m-0 mt-2 w-full md:mt-0 bg-white/60 rounded-md md:p-4 p-2 children:my-8"
                onSubmit={handleFormSubmit}
              >
                <div className="md:flex flex-wrap gap-8 justify-between items-center children:mb-8 md:children:mb-0">
                  <Input
                    placeholder="Title"
                    id="title"
                    required
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <Input
                    placeholder="Author"
                    id="author"
                    required
                    value={author}
                    onChange={handleAuthorChange}
                  />

                  <Input
                    placeholder="Category"
                    id="category"
                    required
                    value={category}
                    onChange={handleCategoryChange}
                  />
                  <Input
                    placeholder="Coordinator"
                    id="coordinator"
                    required={false}
                    value={coordinator}
                    onChange={handleCoordinatorChange}
                  />
                </div>
                <p className="text-sm flex justify-start md:justify-end -translate-y-8">
                  <span className="text-red-500 px-1">*</span> Leave empty if
                  you don't have a coordinator yet
                </p>
                <TextArea
                  placeholder="Short Description"
                  value={shortDescription}
                  onChange={handleShortDescriptionChange}
                />
                <TextArea
                  placeholder="Full Description"
                  value={fullDescription}
                  onChange={handleFullDescriptionChange}
                />

                <input type="hidden" value={createdBy} />

                <div className="flex justify-center">
                  <button className="btn btn-primary w-32" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const initialFormData = {
  title: "",
  author: "",
  coordinator: "",
  category: "",
  shortDescription: "",
  fullDescription: "",
};

export { CreateThesis };
