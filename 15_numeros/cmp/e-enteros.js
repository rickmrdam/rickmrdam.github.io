import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Enteros extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Números enteros (&integers;)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Alguien se dió cuenta que los números podían tener 2 direcciones. Por
       ejemplo, si un número significa un avance, si voy en sentido contrario,
       hay
       un retroceso. Con esto aparece la resta al disminuír, y los números
       negativos al restar un número más grande.
      </p>
     </li>
     <li>
      <p>
       Si tengo 🍔🍔🍔🍔🍔 y le voy a dar de comer 1 a cada 😋😋😋 me quedan
       🍔🍔. O sea, 5 - 3 === 2
      </p>
     </li>
     <li>
      <p>
       Si tengo 🍔🍔🍔 y le voy a dar de comer 1 a cada 😋😋😋 me quedan 0. O
       sea, 3 - 3 === 0
      </p>
     </li>
     <li>
      <p>
       Si tengo 🍔🍔🍔 y le voy a dar de comer 1 a cada 😋😋😋😋 quedo
       debiendo 🍔. O sea 3 - 4 === -1.
      </p>
     </li>
     <li>
      <p>
       Si a + b = c, entonces a = c - b. De esta forma se define la resta, como
       la operación contraria a la suma.
      </p>
     </li>
     <li>
      <p>
       Los matemáticos se repusieron 😁, pero posteriormente hubo algo que les
       partió el corazón 😢.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("e-enteros", Enteros);