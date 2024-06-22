import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Userlist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((item) => ({ ...item, key: item.id }));
        setData(formattedData);
      });
  }, []);

  const viewProfile = (record) => {
    navigate(`/users/view/${record.key}`);
  };

  const editProfile = (record) => {
    navigate(`/users/edit/${record.key}`);
  };

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
        <span>
          <EyeOutlined
            onClick={() => viewProfile(record)}
            style={{ cursor: "pointer", marginRight: 16 }}
          />
          <EditOutlined
            onClick={() => editProfile(record)}
            style={{ cursor: "pointer" }}
          />
        </span>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
