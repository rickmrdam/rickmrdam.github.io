import { Diapositiva } from "../../lib/Diapositiva.js";

export class For extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. La estructura de control <strong>switch</strong></h1>
   <div class="lectura">
     <p>
       El <dfn>switch</dfn> es una alternativa a la condicional múltiple
       que evalúa una expresión y si su resultado corresponde al valor que
       aparece después de la palabra reservada
       <code class="language-kotlin">case</code>,
       empieza a ejecutar las instrucciones que sigan después.
     </p>
     <p>
       Una vez entrado en un caso, el
       <code class="language-kotlin">switch</code>
       continúa avanzando sin importar si invade otros casos, hasta
       encontrar la palabra reservada
       <code class="language-kotlin">break</code>,
       que nos saca de la estructura de control.
     </p>
     <p>
       La siguiente figura representa el comportamiento de la estructura de
       control <code class="language-kotlin">switch</code>:
     </p>
     <figure>
       <img src="/17_switch/img/switch.svg"
        alt="switch" style="max-width: 350px;">
     </figure>
   </div>`;
 }
}

customElements.define("a-17-switch", For);