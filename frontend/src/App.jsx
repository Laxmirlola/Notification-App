import React from "react";
import Notifications from "./components/Notifications";
import "./styles/styles.css";

function App() {
  const dummyUserId = "LaxmirlolaBehera2"; // Replace with actual ID from MongoDB

  return (
    <div>
      <h1>My Notification App</h1>
      <Notifications userId={dummyUserId} />
    </div>
  );
}

export default App;
