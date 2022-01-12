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
      <p>La estructura de control <dfn>do-while</dfn> consta de:</p>
      <ul>
       <li>
        <p>
         La palabra reservada <code
           class="language-kotlin">do</code>.
        </p>
       </li>
       <li>
        <p>Sigue un bloque de instruciones.</p>
       </li>
       <li>
        <p>
         Sigue la palabra reservada
         <code class="language-kotlin">while</code>.
        </p>
       </li>
       <li>
        <p>Sigue una condición.</p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       Mientras la condición evalúa a
       <code class="language-kotlin">true</code>,
       la estructura de control sigue repitiendo el bloque de instrucciones.
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
      <p>El bloque de instrucciones se ejecuta al menos una vez.</p>
     </li>
     <li>
      <p>
       Un uso común de
       <code class="language-kotlin">do-while</code>,
       es validar los datos introducidos por el teclado.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("c-resumen-12", CResumen);