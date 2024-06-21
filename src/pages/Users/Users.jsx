import { PlusOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Modal } from "antd";
import React, { useRef, useState } from "react";
import "./Users.scss";
import { Userlist } from "../Users/Component/Userlist";
const { Content } = Layout;

export const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalFormRef = useRef(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    modalFormRef.current.submit();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const viewProfile = (record) => {
    console.log("View profile of", record);
  };

  return (
    <div className="users-container">
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
      <Content className="content">
        <div className="users-header">
          <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
            Create User
          </Button>
        </div>
        <Userlist />
        <Modal
          title="Create User"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Create"
          destroyOnClose={true}
        ></Modal>
      </Content>
    </div>
  );
};
