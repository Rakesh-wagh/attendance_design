import { Form } from "antd";
import React from "react";

export const UpsertUser = () => {
  return (
    <>
      <Form
        layout="vertical"
        name="userForm"
        initialValues={{ remember: true }}
        ref={modalFormRef}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input the email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please input the phone!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};
