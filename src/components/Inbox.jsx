import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Inbox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Fetch emails from Firestore
    const fetchEmails = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "emails"));
        const emailList = querySnapshot.docs.map(doc => ({
          id: doc.id, // Document ID
          ...doc.data() // Data of the email
        }));
        setEmails(emailList); // Set the emails to state
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs once after the component mounts

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
        Inbox
      </header>
      <div className="flex-1 p-4">
        {emails.length > 0 ? (
          emails.map((email) => (
            <div key={email.id} className="bg-white p-3 rounded-lg shadow-md mb-3">
              <h3 className="text-lg font-semibold">{email.subject}</h3>
              <p className="text-gray-600">{email.body.slice(0, 100)}...</p>
            </div>
          ))
        ) : (
          <p>No emails found.</p>
        )}
      </div>
    </div>
  );
}

export default Inbox;
