import { Diapositiva } from "../../lib/Diapositiva.js";

export class ABoolean extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. El tipo <strong>boolean</strong></h1>
   <div class="lectura">
     <p>
       El tipo de datos <dfn>boolean</dfn> representa la lógica de valores
       verdaderos y falsos.
     </p>
     <h2>Valores</h2>
     <dl>
      <dt>Verdadero</dt>
      <dd><code class="language-kotlin">true</code></dd>
      <dt>Falso</dt>
      <dd><code class="language-kotlin">false</code></dd>
     </dl>
   </div>`;
 }
}

customElements.define("a-boolean", ABoolean);