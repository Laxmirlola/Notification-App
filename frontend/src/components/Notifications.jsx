import React, { useState } from "react";
import api from "../api/api"; // Axios instance

const SendNotificationForm = () => {
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("email");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await api.post("/notifications", {
        userId,
        type,
        message,
      });

      setStatus("✅ Notification sent successfully!");
      setUserId("");
      setType("email");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send notification.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Send Notification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <br />
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Type:</label>
          <br />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="in-app">In-App</option>
          </select>
        </div>

        <div>
          <label>Message:</label>
          <br />
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default SendNotificationForm;
