import "./styles.css";

import Form from "./FormFunction";
import FormClassComponent from "./FormClass";

export default function App() {
  return (
    <div className="App">
      <p>~Functional component</p>
      <Form />
      ##########
      <p>Class component</p>
      <FormClassComponent />
    </div>
  );
}
