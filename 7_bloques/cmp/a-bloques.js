import { Diapositiva } from "../../lib/Diapositiva.js";

export class ABloques extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Bloques</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los <dfn>bloques</dfn> son listas de 0 o más instrucciones encerradas
       entre llaves (<code class="language-kotlin">{}</code>).
      </p>
     </li>
     <li>
      <p>Cuentan como una instrucción.</p>
     </li>
     <li>
      <p>Se ejecutan siguiendo el mismo orden de ejecución de Kotlin.</p>
     </li>
     <li>
      <p>
       Cuando en su interior se declara una variable con
       <code class="language-kotlin">val</code>
       o con
       <code class="language-kotlin">var</code>,
       solo existe dentro del bloque donde se declara.
      </p>
     </li>
     <li>
      <p>
       Los bloques simples se ejecutan con
       <code class="language-kotlin">run</code>.
      </p>
     </li>
     <li>
      <p>
       Una vez terminada la ejecución del bloque, todas las variables
       declaradas con
       <code class="language-kotlin">val</code>
       o con
       <code class="language-kotlin">var</code>
       en su interior, son eliminadas.
      </p>
     </li>
     <li>
      <p>
       Los bloques usan las variables o constantes declaradas fuera del bloque.
      </p>
     </li>
     <li>
      <p>
       Las variables declaradas con
       <code class="language-kotlin">val</code>
       o con
       <code class="language-kotlin">var</code>
       dentro de un bloque ocultan a otras con el mismo nombre que estén
       declaradas fuera del bloque.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a-bloques", ABloques);