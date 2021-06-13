import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <UserForm />;
}

ReactDOM.render(<App />, document.getElementById("root"));
