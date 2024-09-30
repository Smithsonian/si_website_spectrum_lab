import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import PlaygroundView from "./pages/PlaygroundView.vue";
import { createBootstrap } from "bootstrap-vue-next";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

const routes = [{ path: "/", component: PlaygroundView }];

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(createBootstrap());
  },
);
