import { Diapositiva } from "../../lib/Diapositiva.js";

export class C1Componentes extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Componentes de hardware de dispositivos móviles</h1>
    <div class="lectura">
    <dl>
    <dt>Sensores</dt>
    <dd><p>Pendiente.</p></dd>
    <dt>Redes de datos de radio</dt>
    <dd><p>Pendiente.</p></dd>
    <dt>Redes inalámbricas</dt>
    <dd><p>Pendiente.</p></dd>
   </dl>
  </div>`;
 }
}

customElements.define("c-1-componentes", C1Componentes);