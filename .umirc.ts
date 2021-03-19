// import {IConfig} from 'umi-types';
import { getRoutes } from './config/route';

// https://umijs.org/config/

// umi > 3.0
// https://umijs.org/docs/upgrade-to-umi-3#%E5%8D%87%E7%BA%A7-umi-plugin-react-%E4%B8%BA-umijspreset-react
const config = {
  hash: true,
  autoprefixer: { flexbox: 'no-2009' },
  targets: {
    ie: 9,
  },
  publicPath: '/',

  // 代理配置
  // proxy: {
  //   '': {
  //     target: '',

  //     // true 允许跨域
  //     changeOrigin: true,
  //   }
  // },

  antd: {
    // dark: true,
  },
  // layout:{
  //   name: 'Ant Design',
  // },
  dva: {},

  /**
   * tsx 暂时通过
   * 变量的方式引入（import s from './index.scss'）
   * @TODO: 通过modules的方式引入，暂时不生效（import './index.scss'）
   */
  sass: {},

  // 样式配置
  cssLoader: {
    // 这里的 modules 可以接受 getLocalIdent
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          // context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.scss')
        ) {
          return localName;
        }

        // const match = context.resourcePath.match(/src(.*)/);
        // if (match && match[1]) {
        //   const antdProPath = match[1].replace('.less', '');
        //   const arr = winPath(antdProPath)
        //     .split('/')
        //     .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
        //     .map((a: string) => a.toLowerCase());
        //   return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        // }
        // return localName;
      },
    },
  },

  // 路由
  routes: getRoutes(`${__dirname}`),
};

export default config;
