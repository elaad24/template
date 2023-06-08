import React from "react";
import { Outlet, Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const messageStyle: React.CSSProperties = {
    fontSize: "24px",
    marginBottom: "32px",
  };

  const linkStyle: React.CSSProperties = {
    color: "#007bff",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={messageStyle}>Oops! Page not found.</p>
        <p>
          Go back to
          <Link to="/" style={linkStyle}>
            Homepage
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
