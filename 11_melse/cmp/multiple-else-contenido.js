import { Diapositiva } from "../../lib/Diapositiva.js";

export class MultipleElseContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/11_melse/a_melse.html">Condicional múltiple con
        <strong>else</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/11_melse/b_codigo.html">Código con condicional múltiple con
        <strong>else</strong></a>
      </p>
     </li>
     <li>
      <p><a href="/11_melse/c_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("multiple-else-contenido", MultipleElseContenido);