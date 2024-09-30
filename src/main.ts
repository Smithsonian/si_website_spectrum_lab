import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import PlaygroundView from "./pages/PlaygroundView.vue";
import { createBootstrap } from "bootstrap-vue-next";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import VueGtag from "vue-gtag";

const routes = [{ path: "/", component: PlaygroundView }];

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(createBootstrap());
    app.use(
      VueGtag,
      {
        config: {
          id: "G-N4BDY9ZWS8",
        },
      },
      router,
    );
  },
);
