import "./styles/App.css";

import { ButtonWithProps } from "./components/UI/button/Button";
import { ThesisLogo } from "./static/icons";

function App() {
  return (
    <div className="bg-primary-transparent">
      <div className="menu flex items-center justify-between container max-w-full">
        <ThesisLogo className="w-40 h-40" />

        <div className="nav flex items-center md:justify-center gap-4 w-full">
          <ul className="md:flex gap-20 md:gap-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Browse</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam
        veniam illo nemo consequuntur itaque excepturi temporibus, explicabo
        dolor odit.
        <div className="mx-4">
          <ButtonWithProps className="btn btn-danger">hey</ButtonWithProps>
        </div>
      </div>
    </div>
  );
}

export default App;
