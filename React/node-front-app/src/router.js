import { About } from "./About.js";
import { Gallery } from "./Gallery.js";
import { Home } from "./Home.js";
import { Notfound } from "./Notfound.js";

export const routes = {
  "/": Home,
  "/gallery": Gallery,
  "/about": About,
};

export function router() {
  const path = window.location.pathname;
  return (routes[path] || Notfound)();
}

export function navigateTo(url) {
  history.pushState(null, null, url);
}
