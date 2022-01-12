import { Diapositiva } from "../../lib/Diapositiva.js";

export class A12Enteros extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Enteros</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Una parte de los números enteros de las matemáticas se pueden representar en Kotlin.
      </p>
     </li>
     <li>
      <p>
       <code class="language-kotlin">0</code>,
       <code class="language-kotlin">1</code>,
       <code class="language-kotlin">-1</code>,
       <code class="language-kotlin">2</code>,
       <code class="language-kotlin">-2</code>,
       etcétera.
      </p>
     </li>
     <li>
      <p>
       Hay distintos tipos de enteros; la diferencia es cuantos números pueden representar
       y el número de bytes que utilizan.
      </p>
     </li>
   </div>`;
 }
}

customElements.define("a12-enteros", A12Enteros);