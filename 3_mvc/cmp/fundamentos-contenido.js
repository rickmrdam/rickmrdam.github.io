import { Diapositiva } from "../../lib/Diapositiva.js";

export class FundamentosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/3_mvc/a_algoritmo.html">Características de los
        sistemas operativos de dispositivos móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_mvc/b_proceso.html">Uso de los sistemas operativos
        móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/3_mvc/c_lenguaje.html">Componentes de hardware de
        dispositivos móviles</a>
      </p>
     </li>
     <li>
      <p><a href="/3_mvc/d_pseudocodigo.html">Pseudocódigo</a></p>
     </li>
     <li>
      <p><a href="/3_mvc/e_diagrama.html">Diagrama de flujo</a></p>
     </li>
     <li>
      <p><a href="/3_mvc/f_resumen.html">Resumen</a></p>
     </li>
    </ol>`;
 }
}

customElements.define("fundamentos-contenido", FundamentosContenido);