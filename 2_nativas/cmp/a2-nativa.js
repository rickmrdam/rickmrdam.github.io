import { Diapositiva } from "../../lib/Diapositiva.js";

export class A2Nativa extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. App nativa</h1>
    <div class="lectura">
     <p>
      Una <dfn>app nativa</dfn> es una app desarrollada específicamente para una
      plataforma de cómputo.
     </p>
     <h2>Ejemplos de Plataformas</h2>
     <ul>
      <li>Web</li>
      <li>Android</li>
      <li>Windows</li>
      <li>iOS (iPad y iPhone)</li>
      <li>MacOS</li>
     </ul>
    </div>`;
 }
}

customElements.define("a2-nativa", A2Nativa);