import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import PlaygroundView from "./pages/PlaygroundView.vue";

const routes = [{ path: "/", component: PlaygroundView }];

export const createApp = ViteSSG(App, { routes });
