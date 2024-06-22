import { PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout } from "antd";
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./Users.scss";
import { Userlist } from "../Users/Component/Userlist";
import { CreateUser } from "./Component/UpsertUser/UpsertUser";
import { ViewUser } from "./Component/ViewProfile/ViewProfile";
import { EditProfile } from "./Component/EditProfile/EditProfile";

const { Content } = Layout;

export const Users = () => {
  const navigate = useNavigate();

  const showCreateUser = () => {
    navigate("/users/create");
  };

  return (
    <div className="users-container">
      <Breadcrumb
        items={[
          {
            title: <Link to="/users">Home</Link>,
          },
          {
            title: <Link to="create">Create</Link>,
          },
          {
            title: <Link to="view/:id">View Profile</Link>,
          },
          {
            title: <Link to="edit/:id">Edit Profile</Link>,
          },
        ]}
      />
      <Content className="content">
        <div className="users-header">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={showCreateUser}
          >
            Create User
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="view/:id" element={<ViewUser />} />
          <Route path="edit/:id" element={<EditProfile />} />
        </Routes>
      </Content>
    </div>
  );
};
