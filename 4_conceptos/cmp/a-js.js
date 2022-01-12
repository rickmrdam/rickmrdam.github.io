import { Diapositiva } from "../../lib/Diapositiva.js";

export class AJs extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Kotlin</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        <dfn>Kotlin</dfn>
        es un lenguaje de programación moderno que hace a los desarrolladores
        más felices.
       </p>
      </li>
      <li>
       <p>
        Desarrollado por la empresa JetBrains y contribuciones de código
        abierto.
       </p>
      </li>
      <li>
       <p>
        Está diseñado para interactuar con código de Java, por lo cual sus tipos
        de datos son compatibles.
       </p>
      </li>
      <li>
       <p>
        El sitio oficial del lenguaje es
        <a target="_blank"
          href="https://kotlinlang.org/">https://kotlinlang.org/</a>.
       </p>
      </li>
      <li>
       <p>
        Puedes probar ejemplos sencillos en
        <a target="_blank"
          href="https://play.kotlinlang.org/">https://play.kotlinlang.org/</a>.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("a-js", AJs);