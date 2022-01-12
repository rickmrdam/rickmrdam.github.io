import { Diapositiva } from "../../lib/Diapositiva.js";

export class H2UsoNativas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Uso de las app nativas</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>Cuando el rendimiento sea un problema.</p>
      </li>
      <li>
       <p>Cuando el tiempo para desarrollar no esté limitado.</p>
      </li>
      <li>
       <p>
        Cuando se cuente con suficiente dinero para pagar un equipo de trabajo
        muy capacitado, un hardware más caro y una forma de trabajo complicada.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("h2-uso-nativas", H2UsoNativas);