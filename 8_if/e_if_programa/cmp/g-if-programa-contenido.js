import { Diapositiva } from "../../../lib/Diapositiva.js";
import "../../../lib/muestra-codigo.js";

export class IfProgramaContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol>
     <li>
      <p>
       <a href="/6_if/g_if_programa/1_problema.html">Definición del
        Problema</a>
      </p>
     </li>
     <li>
      <p><a href="/6_if/g_if_programa/2_escenarios.html">Escenarios</a></p>
     </li>
     <li>
       <p><a href="/6_if/g_if_programa/3_diseno.html">Diseño</a></p>
     </li>
     <li>
       <p><a href="/6_if/g_if_programa/4_codigo.html">Código</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("g-if-programa-contenido", IfProgramaContenido);