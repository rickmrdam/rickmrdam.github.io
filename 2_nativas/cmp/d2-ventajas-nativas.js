import { Diapositiva } from "../../lib/Diapositiva.js";

export class D2VentajasNativas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Ventajas de las app nativas</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Permiten que la experiencia de usuario se integre mejor al uso de la
        plataforma.
       </p>
      </li>
      <li>
       <p>Mejor rendimiento.</p>
      </li>
      <li>
       <p>Sacan mejor provecho a las características de la plataforma.</p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("d2-ventajas-nativas", D2VentajasNativas);