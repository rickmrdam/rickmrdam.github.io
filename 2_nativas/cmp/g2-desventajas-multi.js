import { Diapositiva } from "../../lib/Diapositiva.js";

export class G2DesventajasMulti extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Desventajas de las app multiplataforma</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>Menor rendimiento.</p>
      </li>
      <li>
       <p>Se integran menos con el sistem operativo.</p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("g2-desventajas-multi", G2DesventajasMulti);