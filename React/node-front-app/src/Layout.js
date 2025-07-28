import { Nav } from "./Nav.js";

export function Layout(view) {
  return `
    ${Nav()}
    <main>${view}</main>
    `;
}
