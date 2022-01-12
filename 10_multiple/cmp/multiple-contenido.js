import { Diapositiva } from "../../lib/Diapositiva.js";

export class MultipleContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p><a href="/10_multiple/a_multiple.html">Condicional múltiple</a></p>
     </li>
     <li>
      <p>
       <a href="/10_multiple/b_codigo.html">Código con condicional múltiple</a>
      </p>
     </li>
     <li>
      <p><a href="/10_multiple/c_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("multiple-contenido", MultipleContenido);