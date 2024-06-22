import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditProfile.scss";

export const EditProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const userData = data.find((user) => user.id === parseInt(id));
        setUser(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        });
      })
      .catch((error) => {
        console.error("Error fetching the JSON file:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data:", formData);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-user-card">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="edit-user-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
