import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BloquesContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p><a href="/7_bloques/a_bloques.html">Bloques</a></p>
     </li>
     <li>
      <p><a href="/7_bloques/b_pres_bloque.html">Depura bloques</a></p>
     </li>
     <li>
      <p>
       <a href="/7_bloques/c_pres_bloque_v_d.html">Depura bloques con
        variables duplicadas</a>
      </p>
     </li>
     <li>
      <p><a href="/7_bloques/d_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("bloques-contenido", BloquesContenido);