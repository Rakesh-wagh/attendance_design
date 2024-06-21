import { Table } from "antd";
import React from "react";
import { EyeOutlined } from "@ant-design/icons";

export const Userlist = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <EyeOutlined
          onClick={() => viewProfile(record)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "john@gmail.com",
      phone: "8574854585",
    },
    {
      key: "2",
      name: "Jim Green",
      email: "john@gmail.com",
      phone: "8574854585",
    },
    {
      key: "3",
      name: "Joe Black",
      email: "john@gmail.com",
      phone: "8574854585",
    },
    {
      key: "4",
      name: "Disabled User",
      email: "john@gmail.com",
      phone: "8574854585",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
