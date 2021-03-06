import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Multiplicaci贸n extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. La multiplicaci贸n</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Fabrico 馃巿馃巿馃巿馃巿 en un d铆a 驴Cuantos en 3 d铆as?
      </p>
     </li>
     <li>
      <pre>馃巿馃巿馃巿馃巿  馃巿馃巿馃巿馃巿 馃巿馃巿馃巿馃巿  === 12
      4    +    4   +    4  (suma 4, 3 veces)
            4 * 3</pre>
     </li>
    </ul>
    <h2>En matem谩ticas</h2>
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
       Hasta aqu铆 todos eran felices 馃榿, pero hubo algo que les parti贸 el coraz贸n
       馃槩.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("d-multiplicacion", Multiplicaci贸n);