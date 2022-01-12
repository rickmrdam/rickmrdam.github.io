import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpNo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Operador lógico NO</h1>
   <div class="lectura">
    <p>
     <code class="language-kotlin">!x</code>
     es el operador NO.
    </p>
    <p>
     Si
     <code class="language-kotlin">x</code>
     se evalúa a
     <code class="language-kotlin">true</code>,
     el resultado es
     <code class="language-kotlin">false</code>;
     de lo contrario, el resultado es
     <code class="language-kotlin">true</code>.
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{&nbsp;</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(!<span
      style="color: #0000ff;">true</span>);&nbsp;&nbsp;<span
      style="color: #008000;">//F</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(!<span
      style="color: #0000ff;">false</span>);&nbsp;<span
      style="color: #008000;">//T</span></div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("c-op-no", OpNo);