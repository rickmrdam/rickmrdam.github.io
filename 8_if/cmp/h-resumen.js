import { Diapositiva } from "../../lib/Diapositiva.js";

export class HResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Resumen</h1>
   <div class="lectura">
     <ul>
       <li>
         <p>
           El tipo de datos <dfn>boolean</dfn> representa la lógica de
           valores verdaderos
           (<code class="language-kotlin">true</code>)
           y falsos
           (<code class="language-kotlin">false</code>).
         </p>
       </li>
       <li>
        <p>Se revisaron los siguientes operadores sobre texto:</p>
        <ul>
          <li>
            <p><code class="language-kotlin">==</code></p>
          </li>
          <li>
            <p><code class="language-kotlin">!=</code></p>
          </li>
        </ul>
       </li>
       <li>
        <p>
         La estructura de control <dfn>if</dfn> permite usar el resultado de
         una condición lógica para controlar si un grupo de instrucciones
         debe o no ejecutarse.
        </p>
        </li>
        <li>
          <p>
           Si la condición evalúa a
           <code class="language-kotlin">true</code>,
           el grupo de instrucciones se ejecuta.
         </p>
        </li>
        <li>
          <p>
           Si la condición evalúa a
           <code class="language-kotlin">false</code>,
           el grupo de instrucciones no se ejecuta.
         </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("h-resumen", HResumen);