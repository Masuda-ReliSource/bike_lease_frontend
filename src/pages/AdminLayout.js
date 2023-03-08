import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { FcBusinessman } from 'react-icons/fc';
import RouteList from "../routes/RouteList";

const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
const items = [
 {
  label: 'Admin Create',
  key: '1',
  icon: <RiAdminLine />
 },
 {
  label: 'Dealer Create',
  key: '2',
  icon: <FcBusinessman />
  // children: []
 }
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: "center",
          }}
        >
          Admin Portal
        </Header>

        {/* ---------------- content ------------------- */}

        <Content
          style={{
            margin: "0 10px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "8px 0",
            }}
          >
            {/* Admin Portal */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <RouteList />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Bike Lease Application
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
