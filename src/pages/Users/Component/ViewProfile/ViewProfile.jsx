import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewProfile.scss";

export const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const userData = data.find((user) => user.id === parseInt(id));
        setUser(userData);
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-card">
      <h2>User Details</h2>
      <div className="user-details">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};
