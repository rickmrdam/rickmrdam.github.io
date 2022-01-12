import { Diapositiva } from "../../lib/Diapositiva.js";

export class Rarezas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Rarezas</h1>
   <div class="lectura">
    <h2>0 / 0</h2>
    <ul>
     <li>
      <p>El resultado de 0/0. De la fórmula, se requiere que (a)(0) = 0.</p>
     </li>
     <li>
      <p>(0)(0) = 0.</p>
     </li>
     <li>
      <p>(1)(0) = 0.</p>
     </li>
     <li>
      <p>(-233.45)(0) = 0.</p>
     </li>
     <li>
      <p>
       No existe un resultado único; el número que se te ocurra es una solución
       🤪.
      </p>
     </li>
    </ul>
    <h2>√-1</h2>
    <ul>
     <li>
      <p>
       El resultado de √-1. De la fórmula, se requiere que a<sup>2</sup> = -1. O
       sea que (a)(a) = -1; pero por la regla de los signos el resultado no se
       puede cumplir (-1)(-1) = 1 y (1)(1) = 1. 😵
      </p>
     </li>
    </ul>
    <h2>Paradojas lógicas</h2>
    <ul>
     <li>
      <p>
       Los matemáticos observaron que las matemáticas llevaban a contradicciones
       lógicas y se les partió el corazón 😢, pero pensaban que se podían
       corregir. A finales del siglo XIX hicieron un concurso que se llamaba
       Metamatemáticas, donde se le iba a dar mucho dinero 💵 a quien pudiera
       hacer una formulación de las matemáticas que no tuviera errores.
      </p>
     </li>
     <li>
      <p>
       Los matemáticos tenían entonces la esperanza de ser felices 🙃, pero hubo
       algo que les rompió el corazón 😭.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("h-rarezas", Rarezas);