import { useParams, Navigate } from "react-router-dom";

const User = () => {
  const { username } = useParams();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Redirect if user is not logged in or username doesn't match
  if (!storedUser || storedUser.username !== username) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Hello, {storedUser.username} 👋</h2>
      <p>Welcome to your dashboard.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default User;
