import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class OpTernario extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
     D. Condicional múltiple con <strong>else</strong> como operador lógico
    </h1>
   <div class="lectura">
    <p>
     Toma el valor de la expresión asociada a la condición que resulte verdadera
     de acuerdo a las reglas de la condicional múltiple con
     <code class="language-kotlin">else</code>.
    </p>
   </div>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">fun</span>&nbsp;<span
      style="color: #795e26;">main</span>()&nbsp;{&nbsp;</div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #af00db;">if</span>&nbsp;(<span
      style="color: #0000ff;">true</span>)&nbsp;<span
      style="color: #098658;">3</span>&nbsp;<span
      style="color: #af00db;">else</span>&nbsp;<span
      style="color: #098658;">8</span>);&nbsp;<span
      style="color: #008000;">//3</span></div>
   <div>&nbsp;<span style="color: #795e26;">println</span>(<span
      style="color: #af00db;">if</span>&nbsp;(<span
      style="color: #0000ff;">false</span>)&nbsp;<span
      style="color: #098658;">3</span>&nbsp;<span
      style="color: #af00db;">else</span>&nbsp;<span
      style="color: #098658;">8</span>);<span style="color: #008000;">//8</span>
   </div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("d-op-ternario", OpTernario);