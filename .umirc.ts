// import {IConfig} from 'umi-types';

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

  // plugins: [
  //   // ref: https://umijs.org/plugin/umi-plugin-react.html
  //   [
  //     'umi-plugin-react',
  //     {
  //       antd: true,
  //       dva: {
  //         hmr: true,
  //         immer: true,
  //       },
  //       dynamicImport: { webpackChunkName: true },
  //       title: 'my-study',
  //       dll: true,
  //       routes: {
  //         exclude: [
  //           /models\//,
  //           /services\//,
  //           /model\.(t|j)sx?$/,
  //           /service\.(t|j)sx?$/,
  //           /components\//
  //         ]
  //       },
  //     },
  //   ],
  // ],
  antd: {},
  dva: {},

  routes: [
    {
      path: '/',
      component: `${__dirname}/src/layouts`,
    },
  ],
};

export default config;
