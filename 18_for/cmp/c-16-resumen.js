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
           La <dfn>estructura de control for</dfn> consta de la siguiente
           estructura:
         </p>
         <pre><code class="language-kotlin"><strong>for</strong> (inicialización; condición; paso) {
 instrucciones
}</code></pre>
         <p>Equivale a la estructura de control:</p>
         <pre><code class="language-kotlin">{
 inicialización;
 <strong>while</strong> (condición) {
   instrucciones
   paso;
 }
}</code></pre>
       </li>
       <li>
         <p>
           La sección de <dfn>inicialización</dfn> crea variables que solo
           existen durante la ejecución del ciclo
           <code class="language-kotlin">for</code> y se eliminan una vez
           terminado.
         </p>
       </li>
       <li>
         <p>
           La sección de <dfn>paso</dfn> cambia el valor de las variables para
           que
           hacer que la condición esté cada vez más cerca de evaluar a
           <code class="language-kotlin">false</code>.
         </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("c-16-resumen", CResumen);