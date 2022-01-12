import { Diapositiva } from "../../lib/Diapositiva.js";

export class CResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       El <dfn>switch</dfn> es una alternativa a la condicional múltiple
       que evalúa una expresión y si su resultado corresponde al valor que
       aparece después de la palabra reservada
       <code class="language-kotlin">case</code>,
       empieza a ejecutar las instrucciones que sigan después.
      </p>
     </li>
     <li>
      <p>
       El <dfn>switch-default</dfn> es una alternativa a la condicional
       múltiple con else, cuyo comportamiento es similar al del
       <code class="language-kotlin">switch</code>, donde
       <code class="language-kotlin">default</code>,
       es una etiqueta más, que atrae a todos los casos que no correspondan
       a ninguno de los
       <code class="language-kotlin">case</code>.
      </p>
     </li>
     <li>
      <p>
       Una vez entrado en un caso, el
       <code class="language-kotlin">switch</code>
       continúa avanzando sin importar si invade otros casos, hasta
       encontrar la palabra reservada
       <code class="language-kotlin">break</code>,
       que nos saca de la estructura de control.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("e-17-resumen", CResumen);