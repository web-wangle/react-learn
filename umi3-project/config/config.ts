import { defineConfig } from 'umi';
import routes from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  layout: {
    name: 'Thomas',
    locale: true,
    layout: 'side'
  },
  routes,
  fastRefresh: {},
});
