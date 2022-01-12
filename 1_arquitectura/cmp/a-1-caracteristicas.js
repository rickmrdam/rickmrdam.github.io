import { Diapositiva } from "../../lib/Diapositiva.js";

export class A1Caracteristicas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
     A. Características de los sistemas operativos de dispositivos móviles
    </h1>
    <div class="lectura">
     <p>Por desarrollar.</p>
    </div>`;
 }
}

customElements.define("a-1-caracteristicas", A1Caracteristicas);