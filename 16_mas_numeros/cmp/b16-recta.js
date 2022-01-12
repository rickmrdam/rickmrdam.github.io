import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B16Recta extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Tipos de punto flotante</h1>
   <figure>
     <img alt="Imagen de la recta numérica" src="/16_mas_numeros/img/recta.svg">
   </figure>
   <div class="lectura">
   <p>
    El tipo Float es más pequeño y el tipo Double es el más grande.
  </p>
  <p>Los números a la izquierda son menores que los de la derecha.</p>
     <dl>
       <dt><dfn><code class="language-kotlin">0.0</code></dfn></dt>
       <dd>
         <p>Es el centro de la recta.</p>
       </dd>
       <dt><dfn><code class="language-kotlin">MIN_VALUE</code></dfn>
       </dt>
       <dd>
         <p>Es el valor positivo más cercano a 0.</p>
       </dd>
       <dt><dfn><code
             class="language-kotlin">-MIN_VALUE</code></dfn></dt>
       <dd>
         <p>Es el valor negativo más cercano a 0.</p>
       </dd>
       <dt><dfn><code class="language-kotlin">MAX_VALUE</code></dfn>
       </dt>
       <dd>
         <p>Es el valor numérico finito más positivo.</p>
       </dd>
       <dt><dfn><code
             class="language-kotlin">-MAX_VALUE</code></dfn></dt>
       <dd>
         <p>Es el valor numérico finito más negativo.</p>
       </dd>
       <dt><dfn><code
             class="language-kotlin">POSITIVE_INFINITY</code></dfn>
       </dt>
       <dd>
         <p>
           Representa a todos los valores mayores que
           <code class="language-kotlin">MAX_VALUE</code>.
         </p>
       </dd>
       <dt><dfn><code
             class="language-kotlin">NEGATIVE_INFINITY</code></dfn>
       </dt>
       <dd>
         <p>
           Representa a todos los valores menores que
           <code class="language-kotlin">-MAX_VALUE</code>.
         </p>
       </dd>
     </dl>
   </div>`;
 }
}

customElements.define("b16-recta", B16Recta);