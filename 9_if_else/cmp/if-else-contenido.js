import { Diapositiva } from "../../lib/Diapositiva.js";

export class IfElseContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/9_if_else/a_if_else.html">La estructura de control
        <strong>if-else</strong></a>
      </p>
     </li>
     <li>
      <p>
       <a href="/9_if_else/b_codigo.html">Código con
        <strong>if-else</strong></a></a>
      </p>
     </li>
     <li>
      <p><a href="/9_if_else/c_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("if-else-contenido", IfElseContenido);