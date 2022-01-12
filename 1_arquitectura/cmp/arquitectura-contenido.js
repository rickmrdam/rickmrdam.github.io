import { Diapositiva } from "../../lib/Diapositiva.js";

export class ArquitecturaContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/1_arquitectura/a_caracteristicas.html">Características de los
        sistemas operativos de dispositivos móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_arquitectura/b_uso.html">Uso de los sistemas operativos
        móviles</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_arquitectura/c_componentes.html">Componentes de hardware de
        dispositivos móviles</a>
      </p>
     </li>
    </ol>`;
 }
}

customElements.define("arquitectura-contenido", ArquitecturaContenido);