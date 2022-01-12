import { Diapositiva } from "../../lib/Diapositiva.js";

export class Suma extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. La suma</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       🍔🍔+🍔 === 🍔🍔🍔
      </p>
     </li>
     <li>
      <p>
       🍕🍕 + 🍕 === 🍕🍕🍕
      </p>
     </li>
     <li>
      <p>
       I I + I  === I I I
      </p>
     </li>
    </ul>
    <h2>En matemáticas</h2>
    <ul>
     <li>
      <p>0 + b = b</p>
     </li>
     <li>
      <p>a' + b = (a + b)'</p>
     </li>
     <li>
      <p>0 + 3 = 3</p>
     </li>
     <li>
      <p>1 + 3 = (0 + 3)' = 3' = 4</p>
     </li>
     <li>
      <p>2 + 3 = (1 + 3)' = 4' = 5</p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("c-suma", Suma);