/**
 * layout
 */
import React from 'react';
// import React from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { history } from 'umi';

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import { getRoutes } from '../../config/route';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const RenderLayout = (props: any) => {
  const pathList = history.location.pathname.split('/');

  const clickRouteFun = (e: any) => {
    const { keyPath } = e;
    const path = `/${keyPath[1]}/${keyPath[0]}`;

    history.push(path);
  };

  // 侧边栏
  const renderMenu = () => {
    const renderItem = (list: any) => {
      if (Array.isArray(list) && list.length) {
        return (list || []).map((item: any) => {
          return <Menu.Item key={item.name}>{item.name}</Menu.Item>;
        });
      }

      return null;
    };

    return (getRoutes()[0].routes || []).map((item: any) => {
      return (
        <SubMenu key={item.name} icon={<item.icon />} title={item.name}>
          {renderItem(item.routes)}
        </SubMenu>
      );
    });
  };

  return (
    <Layout>
      {/* 头部 */}
      <Header className="header">
        <div className="logo">个人学习</div>

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
            defaultSelectedKeys={[pathList[2]]}
            defaultOpenKeys={[pathList[1]]}
            style={{ height: '100%', borderRight: 0 }}
            theme={'dark'}
            onClick={clickRouteFun}
          >
            {renderMenu()}
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
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RenderLayout;
