import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Multiplicación extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. La multiplicación</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Fabrico 🎈🎈🎈🎈 en un día ¿Cuantos en 3 días?
      </p>
     </li>
     <li>
      <pre>🎈🎈🎈🎈  🎈🎈🎈🎈 🎈🎈🎈🎈  === 12
      4    +    4   +    4  (suma 4, 3 veces)
            4 * 3</pre>
     </li>
    </ul>
    <h2>En matemáticas</h2>
    <ul>
     <li>
      <p>(a)(0) = 0</p>
     </li>
     <li>
      <p>(a)(b') = ((a)(b)) + a</p>
     </li>
     <li>
      <p>(2)(0) = 0</p>
     </li>
     <li>
      <p>(2)(1) = ((2)(0)) + 2 = 0 + 2 = 2</p>
     </li>
     <li>
      <p>(2)(2) = ((2)(1)) + 2 = 2 + 2 = 4</p>
     </li>
     <li>
      <p>(2)(3) = ((2)(2)) + 2 = 4 + 2 = 6</p>
     </li>
     <li>
      <p>
       Hasta aquí todos eran felices 😁, pero hubo algo que les partió el corazón
       😢.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("d-multiplicacion", Multiplicación);