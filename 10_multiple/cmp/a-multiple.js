import { Diapositiva } from "../../lib/Diapositiva.js";

export class Multiple extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Condicional Múltiple</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       La siguiente figura representa el comportamiento de la condicional
       múltiple:
      </p>
      <figure>
       <img src="/10_multiple/img/condicional-multiple.svg"
         alt="Condicional Múltiple" style="max-width: 350px;">
      </figure>
     </li>
     <li>
      <p>La <dfn>condicional múltiple</dfn> es una lista en la que:</p>
      <ul>
       <li>
        <p>
         Cada elemento de la lista empieza con la palabra reservada
         <code class="language-kotlin">if</code>, seguida de una
         condición entre paréntesis y un bloque de instucciones.
        </p>
       </li>
       <li>
        <p>
         Los elementos de la lista se separan con la palabra reservada
         <code class="language-kotlin">else</code>.
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       Para ejecutar, empieza a revisar los elementos de la lista, empezando
       por la primera condición. Se ejecuta el bloque de instrucciones que
       corresponda a la primera condición que evalue a
       <code class="language-kotlin">true</code> y luego se termina la
       estructura, continuando con las instrucciones que aparezcan después de
       la lista.
      </p>
     </li>
     <li>
      <p>
       Si ninguna condición evalúa a
       <code class="language-kotlin">true</code>, se continua con las
       instrucciones que aparezcan después de la lista.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a-multiple", Multiple);