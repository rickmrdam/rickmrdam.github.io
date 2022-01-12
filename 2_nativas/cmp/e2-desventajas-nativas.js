import { Diapositiva } from "../../lib/Diapositiva.js";

export class E2DesventajasNativas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Desventajas de las app nativas</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>Requieren un equipo de desarrollo con más conocimientos.</p>
      </li>
      <li>
       <p>Hay que desarrollar y dar mantenimiento a más código.</p>
      </li>
      <li>
       <p>Más caro.</p>
      </li>
      <li>
       <p>Más tiempo para desarrollar.</p>
      </li>
      <li>
       <p>Forma de trabajo más complicada.</p>
      </li>
      <li>
       <p>Software que requiere más recursos de hardware.</p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("e2-desventajas-nativas", E2DesventajasNativas);