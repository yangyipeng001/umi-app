/**
 * layout
 */
import React from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import MaskCss from '@/pages/mask';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const RenderLayout = () => {
  return (
    <Layout>
      {/* 头部 */}
      <Header className="header">
        <div className="logo" />

        {/* 头部菜单 */}
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>

      <Layout>
        {/* 侧边栏 */}
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['mask']}
            defaultOpenKeys={['css']}
            style={{ height: '100%', borderRight: 0 }}
            theme={'dark'}
          >
            <SubMenu key="css" icon={<UserOutlined />} title="css">
              <Menu.Item key="mask">mask</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>

            <SubMenu key="js" icon={<LaptopOutlined />} title="js">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>

            <SubMenu
              key="others"
              icon={<NotificationOutlined />}
              title="others"
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          {/* 导航 */}
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          {/* 内容 */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <MaskCss />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RenderLayout;
