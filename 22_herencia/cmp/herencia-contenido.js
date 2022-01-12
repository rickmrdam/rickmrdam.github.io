import { Diapositiva } from "../../lib/Diapositiva.js";

export class HerenciaContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
    <li>
     <p>
      <a href="/22_herencia/a_constructores.html">Constructores</a>
     </p>
    </li>
    <li>
     <p>
      <a href="/22_herencia/b_sobreescritura.html">Sobrescritura de métodos</a>
     </p>
    </li>
   </ol>`;
 }
}

customElements.define("herencia-contenido", HerenciaContenido);