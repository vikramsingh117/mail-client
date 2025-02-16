// src/components/Navbar.js
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mail Client</h1>
        <div className="flex space-x-4">
          <Link to="/inbox" className="hover:underline">Inbox</Link>
          <Link to="/compose" className="hover:underline">Compose</Link>
          <Link to="/" className="hover:underline">Logout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
