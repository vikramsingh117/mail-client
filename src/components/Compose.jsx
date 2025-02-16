// src/components/Compose.js
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Compose() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!auth.currentUser) {
      // Redirect to login if not logged in
      navigate("/login");
      return;
    }

    try {
      await addDoc(collection(db, "emails"), {
        sender: auth.currentUser.email,
        recipient,
        subject,
        body,
        createdAt: serverTimestamp(),
      });
      navigate("/inbox");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Compose Email</h2>
      <form onSubmit={handleSend} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Message body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-48"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Compose;
