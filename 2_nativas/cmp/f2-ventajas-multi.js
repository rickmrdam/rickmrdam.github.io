import { Diapositiva } from "../../lib/Diapositiva.js";

export class F2VentajasMulti extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Ventajas de las app multiplataforma</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>1 solo código.</p>
      </li>
      <li>
       <p>Menor tiempo de desarrollo.</p>
      </li>
      <li>
       <p>Desarrollo más barato.</p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("f2-ventajas-multi", F2VentajasMulti);