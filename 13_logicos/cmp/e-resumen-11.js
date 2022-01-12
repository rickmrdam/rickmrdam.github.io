import { Diapositiva } from "../../lib/Diapositiva.js";

export class Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Resumen</h1>
   <div class="lectura">
     <p>Se revisaron los siguientes operadores lógicos:</p>
     <ul>
       <li>
         <p><code class="language-kotlin">&&</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">||</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">!</code></p>
       </li>
       <li>
        <p>
         Condicional múltiple con
         <code class="language-kotlin">else</code>
         como operador lógico.
        </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("e-resumen-11", Resumen);