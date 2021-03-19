// 路由配置项
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

export const getRoutes = (path?: string) => {
  return [
    {
      path: '/',
      component: `${path}/src/layouts`,
      routes: [
        {
          path: '/css',
          name: 'css',
          icon: UserOutlined,
          routes: [
            {
              path: '/css/mask',
              name: 'mask',
              icon: '',
              component: `${path}/src/pages/mask`,
            },
            {
              path: '/css/waterfall-flow',
              name: 'waterfall-flow',
              icon: '',
              component: `${path}/src/pages/waterfall-flow`,
            },
          ],
        },
      ],
    },
  ];
};
