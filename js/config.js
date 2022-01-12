import "../cmp/mi-nav.js";
import "../lib/layout-cajon.js";
import "../lib/mi-footer.js";
import { muestraError, setTitle } from "../lib/utilHtml.js";

registraServiceWorker();

document.addEventListener("DOMContentLoaded", () => setTitle("gilpgdam"));

async function registraServiceWorker() {
  try {
    if (navigator.serviceWorker) {
      const registro = await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registrado.");
      console.log(registro);
    }
  } catch (e) {
    muestraError(e);
  }
}