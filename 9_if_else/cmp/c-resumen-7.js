import { Diapositiva } from "../../lib/Diapositiva.js";

export class CResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La estructura de control <dfn>if-else</dfn> permite usar el resultado de
       una condición lógica para controlar si dos grupos de instrucciones deben
       o no ejecutarse. Un grupo de instrucciones va inmediatamente después de
       la condición y el otro grupo va después de la palabra reservada
       <code class="language-kotlin">else</code>.
      </p>
     </li>
     <li>
      <p>
       Si la condición evalúa a
       <code class="language-kotlin">true</code>,
       el grupo de instrucciones después de la condición se ejecuta.
      </p>
     </li>
     <li>
      <p>
       Si la condición evalúa a
       <code class="language-kotlin">false</code>,
       el grupo de instrucciones después de la palabra reservada
       <code class="language-kotlin">else</code> se ejecuta.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("c-resumen-7", CResumen);