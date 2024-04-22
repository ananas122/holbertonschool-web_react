// task_1/dashboard/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications";

ReactDOM.render(
  <React.StrictMode>
    <div className="root-notifications"> {/* Utilisez la classe CSS root-notifications */}
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
