import { Diapositiva } from "../../lib/Diapositiva.js";

export class AIfElse extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. La estructura de control <strong>if-else</strong></h1>
   <div class="lectura">
    <p>
     La estructura de control <dfn>if-else</dfn> permite usar el resultado de
     una condición lógica para controlar si dos grupos de instrucciones
     deben o no ejecutarse. Un grupo de instrucciones va inmediatamente
     después de la condición y el otro grupo va después de la palabra
     reservada
     <code class="language-kotlin">else</code>.
    </p>
    <p>
     La siguiente figura representa el comportamiento de la estructura de
     control <code class="language-kotlin">if-else</code>:
    </p>
    <figure>
     <img src="/9_if_else/img/if-else.svg" alt="if-else"
      style="max-width: 350px;">
    </figure>
    <p>
     Si la condición evalúa a
     <code class="language-kotlin">true</code>,
     el grupo de instrucciones después de la condición se ejecuta.
    </p>
    <p>
     Si la condición evalúa a
     <code class="language-kotlin">false</code>,
     el grupo de instrucciones después de la palabra reservada
     <code class="language-kotlin">else</code> se ejecuta.
    </p>
   </div>`;
 }
}

customElements.define("a-if-else", AIfElse);