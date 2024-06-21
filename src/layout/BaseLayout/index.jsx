import { Layout } from "antd";
import React from "react";
import "./BaseLayout.scss";
import { Sidebar } from "./Component/Sidebar";
import { HeaderComponent } from "./Component/Header";

const { Sider, Content } = Layout;

export const BaseLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Layout>
        <Sider className="sider site-layout-background">
          <Sidebar />
        </Sider>
        <Layout className="content-layout">{children}</Layout>
      </Layout>
    </Layout>
  );
};
