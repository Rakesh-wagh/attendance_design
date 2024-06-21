import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/region">Region</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/role">Role</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/location">Location</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/event">Event</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/attendance">Attendance List</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/makeattendance">Make Attendance</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Dropdown overlay={menu}>
            <Button>
              Miscellaneous <DownOutlined />
            </Button>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </>
  );
};
