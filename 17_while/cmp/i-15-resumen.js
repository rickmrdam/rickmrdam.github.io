import { Diapositiva } from "../../lib/Diapositiva.js";

export class Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La <dfn>estructura de control while</dfn> consta de:
      </p>
      <ol>
       <li>
        <p>
         La palabra reservada <code
           class="language-kotlin">while</code>.
        </p>
       </li>
       <li>
        <p>Una condición.</p>
       </li>
       <li>
        <p>Un bloque de instrucciones.</p>
       </li>
      </ol>
     </li>
     <li>
      <p>Para ejecutar, se siguen estos pasos:</p>
      <ol>
       <li>
        <p>Se evalúa la condición.</p>
       </li>
       <li>
        <p>
         Si la condición evalúa a <code
           class="lang-javascript">false</code>,
         se termina la ejecución del ciclo y continúa con las
         instrucciones
         que aparecen después de la estructura; si la condición evalúa a
         <code class="lang-javascript">true</code>, continúa con el
         siguiente
         paso.
        </p>
       </li>
       <li>
        <p>Se elecuta el bloque de instrucciones.</p>
       </li>
       <li>
        <p>Regresa al paso 1 y vuelve a ejecutar los pasos.</p>
       </li>
      </ol>
     </li>
     <li>
      <p>
       Mientras la condición evalúa a
       <code class="language-kotlin">true</code>,
       la estructura de control sigue repitiendo el bloque de
       instrucciones.
      </p>
     </li>
     <li>
      <p>
       Cuando la condición evalúa a
       <code class="language-kotlin">false</code>,
       se termina el ciclo.
      </p>
     </li>
     <li>
      <p>
       Es importante diseñar bien el
       <code class="language-kotlin">while</code>
       para no caer en ciclos interminables.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("i-15-resumen", Resumen);