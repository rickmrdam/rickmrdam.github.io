import { Diapositiva } from "../../lib/Diapositiva.js";

export class EDiagrama extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Diagrama de flujo</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Un
        <dfn>diagrama de flujo</dfn>
        es una forma de especificar un algoritmo usando dibujos con
        características bien definidas.
       </p>
      </li>
      <li>
       <p>
        Los diagramas de flujo normalmente se usan como apoyo en el desarrollo
        de aplicaciones de cómputo.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("e-diagrama-1", EDiagrama);