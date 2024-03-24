import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  // State to track if the user is logged in and their username
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  // Function to handle login
  const handleLogin = () => {
    const enteredUsername = prompt("Please enter your username:");
    if (enteredUsername) {
      // Set isLoggedIn and username in local storage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", enteredUsername);
      setIsLoggedIn(true);
      setUsername(enteredUsername);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear isLoggedIn and username from local storage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
  };

  // Function to handle create button click
  const handleCreateClick = () => {
    if (!isLoggedIn) {
      alert("Please log in to create a new thread.");
    } else {
      // Navigate to the create page or handle create logic here
      navigate("/create");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" aria-disabled="true" to="/">
          RATE IT ALL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {!isLoggedIn ? (
              <button
                data-mdb-ripple-init=""
                type="button"
                className="btn btn-link px-3 me-2"
                onClick={handleLogin}
              >
                Login
              </button>
            ) : (
              <>
                <span className="me-2">Logged in as: {username}</span>
                <button
                  type="button"
                  className="btn btn-link px-3 me-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleCreateClick}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
