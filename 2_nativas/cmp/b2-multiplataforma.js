import { Diapositiva } from "../../lib/Diapositiva.js";

export class B2Multiplataforma extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. App multiplataforma</h1>
    <div class="lectura">
     <p>
      Una <dfn>app multiplataforma</dfn> es una app diseñada para ejecutarse en
      diferentes plataformas.
     </p>
     <h3>Tecnologías Multiplataforma</h3>
     <ul>
      <li>Progressive Web Application (PWA)</li>
      <li>Cordova</li>
      <li>Native Script</li>
      <li>Ionic</li>
     </ul>
    </div>`;
 }
}

customElements.define("b2-multiplataforma", B2Multiplataforma);