import { Diapositiva } from "../../lib/Diapositiva.js";

export class AComentarios extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Comentarios</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los <dfn>comentarios</dfn> son secciones de código que no son
       procesadas y explican partes del programa para que se puedan
       entender mejor.
      </p>
     </li>
     <li>
      <p>
       Normalmente se colocan en la línea inmediatamente antes del
       texto que explican, aunque también se colocan al final del renglón
       que explican.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a-comentarios", AComentarios);