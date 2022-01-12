import { Diapositiva } from "../../lib/Diapositiva.js";

export class Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. Resumen</h1>
   <div class="lectura">
     <p>Se revisó la forma en que se elaboraron:</p>
     <ul>
       <li>
         <p>Los números naturales.</p>
       </li>
       <li>
         <p>Los números enteros.</p>
       </li>
       <li>
         <p>Los números racionales.</p>
       </li>
       <li>
         <p>Los números irracionales.</p>
       </li>
       <li>
         <p>Rarezas matemáticas.</p>
       </li>
       <li>
         <p>Los teoremas de Gödel.</p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("j-resumen-13", Resumen);