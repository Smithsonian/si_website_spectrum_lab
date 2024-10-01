import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import PlaygroundView from './pages/PlaygroundView.vue';
import { createBootstrap } from 'bootstrap-vue-next';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import VueGtag from 'vue-gtag';
import Session2View from './pages/Session2View.vue';

const routes = [
  { path: '/session2vue', component: Session2View },
  { path: '/', component: PlaygroundView },
];

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(createBootstrap());
    app.use(
      VueGtag,
      {
        config: {
          id: 'G-N4BDY9ZWS8',
        },
      },
      router,
    );
  },
);
