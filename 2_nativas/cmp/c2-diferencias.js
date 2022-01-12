import { Diapositiva } from "../../lib/Diapositiva.js";

export class C2Diferencias extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Diferencias entre app nativa y app multiplataforma</h1>
    <div class="lectura">
     <table class="borde">
      <thead>
       <tr>
        <th>App Nativa</th>
        <th>App Multiplataforma</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1 código por plataforma. (Posiblemente en distintos lenguajes.)</td>
        <td>1 código único para todas las plataformas.</td>
       </tr>
      </tbody>
     </table>
    </div>`;
 }
}

customElements.define("c2-diferencias", C2Diferencias);