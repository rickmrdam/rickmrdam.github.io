import { Diapositiva } from "../../lib/Diapositiva.js";

export class SwitchContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
  <li>
   <p>
    <a href="/19_switch/a_codigo_switch.html">Código con
     <strong>when</strong></a>
   </p>
  </li>
  <li>
    <p>
    <a href="/19_switch/b_codigo_switch_default.html">Código con
     <strong>when</strong> y <strong>else</strong></a>
    </p>
  </li>
</ol>`;
 }
}

customElements.define("switch-contenido", SwitchContenido);