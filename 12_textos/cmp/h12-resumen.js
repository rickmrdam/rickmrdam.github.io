import { Diapositiva } from "../../lib/Diapositiva.js";

export class H12Resumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Resumen</h1>
   <div class="lectura">
     <p>Se revisaron los siguientes operadores sobre texto:</p>
     <ul>
       <li>
         <p><code class="language-kotlin">+</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">+=</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">"&dollar;{}"</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">"&dollar;id"</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&lt;</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&gt;</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&lt;=</code></p>
       </li>
       <li>
         <p><code class="language-kotlin">&gt;=</code></p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("h12-resumen", H12Resumen);