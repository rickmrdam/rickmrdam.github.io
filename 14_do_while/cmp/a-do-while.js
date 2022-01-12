import { Diapositiva } from "../../lib/Diapositiva.js";

export class DoWhile extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. La estructura de control do-while</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La siguiente figura representa el comportamiento de la estructura de
       control <code class="language-kotlin">do-while</code>:
      </p>
      <figure>
       <img src="/14_do_while/img/do-while.svg" alt="do-while"
        style="max-width: 350px;">
      </figure>
     </li>
     <li>
      <p>La estructura de control <dfn>do-while</dfn> consta de:</p>
      <ul>
       <li>
        <p>
         La palabra reservada <code class="language-kotlin">do</code>.
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
      <p>El bloque de instrucciones se ejecuta al menos una vez.</p>
     </li>
     <li>
      <p>Para ejecutar, se siguen estos pasos:</p>
      <ol>
       <li>
        <p>Se ejecuta el bloque se instrucciones</p>
       </li>
       <li>
        <p>Se evalúa la condición.</p>
       </li>
       <li>
        <p>
         Si la condición y si evalúa a
         <code class="language-kotlin">false</code>, se termina el ciclo
         y se continúa con las instrucciones que sigan después de la
         estructura; pero si evalúa a
         <code class="language-kotlin">true</code>,
         se regresa al a ejecutar otra vez el bloque de instrucciones y luego
         se evalúa la condición, para después ejecutar otra vez este paso y
         las instrucciones aquí indicadas.
        </p>
       </li>
      </ol>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a-do-while", DoWhile);