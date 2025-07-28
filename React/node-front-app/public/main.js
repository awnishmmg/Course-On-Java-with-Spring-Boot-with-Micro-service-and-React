import { router, navigateTo } from "../src/router.js";
import { Layout } from "../src/Layout.js";
function renderApp() {
  const content = Layout(router());
  document.getElementById("root").innerHTML = content;
}

window.addEventListener("popstate", renderApp);
document.addEventListener("DOMContentLoaded", function () {
  //body
  document.body.addEventListener("click", function (e) {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
      renderApp();
    }
  });
  renderApp();
  //closing
});
