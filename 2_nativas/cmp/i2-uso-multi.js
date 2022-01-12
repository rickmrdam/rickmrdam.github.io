import { Diapositiva } from "../../lib/Diapositiva.js";

export class H2UsoMulti extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Uso de las app multiplataforma</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>Cuando el rendimiento no sea un problema.</p>
      </li>
      <li>
       <p>Cuando no se cuente con mucho dinero para desarrollar.</p>
      </li>
      <li>
       <p>Cuando el tiempo para desarrollar sea una limitante.</p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("i2-uso-multi", H2UsoMulti);