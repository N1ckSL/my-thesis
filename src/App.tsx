import "./styles/App.css";

import { ButtonWithProps } from "./components/UI/button/Button";

function App() {
  return (
    <div className="text-primary-600 bg-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
      veniam illo nemo consequuntur itaque excepturi temporibus, explicabo dolor
      odit.
      <div className="mx-4">
        <ButtonWithProps className="btn btn-danger">hey</ButtonWithProps>
      </div>
    </div>
  );
}

export default App;
