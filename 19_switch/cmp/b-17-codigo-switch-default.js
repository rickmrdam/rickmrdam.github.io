import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class BCodigo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
   D. Código con <strong>when</strong> y <strong>else</strong>
  </h1>
  <muestra-codigo>
<div><div><span style="color: #0000ff;">fun</span>&nbsp;<span style="color: #795e26;">main</span>()&nbsp;{</div><div>&nbsp;<span style="color: #795e26;">print</span>(</div><div>&nbsp;&nbsp;<span style="color: #a31515;">"""Selecciona&nbsp;un&nbsp;género&nbsp;musical:</span></div><div><span style="color: #a31515;">&nbsp;1&nbsp;-&nbsp;Pop</span></div><div><span style="color: #a31515;">&nbsp;2&nbsp;-&nbsp;Reguetón</span></div><div><span style="color: #a31515;">&nbsp;3&nbsp;-&nbsp;Balada</span></div><div><span style="color: #a31515;">&nbsp;4&nbsp;-&nbsp;Mariachi</span></div><div><span style="color: #a31515;">&nbsp;5&nbsp;-&nbsp;Cumbia</span></div><div><span style="color: #a31515;">&nbsp;6&nbsp;-&nbsp;Tango</span></div><div><span style="color: #a31515;">&nbsp;Opción:&nbsp;"""</span>)</div><div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;género&nbsp;=&nbsp;readLine()</div><div>&nbsp;<span style="color: #af00db;">when</span>&nbsp;(género)&nbsp;{</div><div>&nbsp;&nbsp;<span style="color: #a31515;">"1"</span>&nbsp;-&gt;&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Ariana&nbsp;Grande"</span>)</div><div>&nbsp;&nbsp;}</div><div>&nbsp;&nbsp;<span style="color: #a31515;">"3"</span>,&nbsp;<span style="color: #a31515;">"4"</span>&nbsp;-&gt;&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Juan&nbsp;Gabriel"</span>)</div><div>&nbsp;&nbsp;}</div><div>&nbsp;&nbsp;<span style="color: #a31515;">"5"</span>&nbsp;-&gt;&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Selena"</span>)</div><div>&nbsp;&nbsp;}</div><div>&nbsp;&nbsp;<span style="color: #a31515;">"2"</span>&nbsp;-&gt;&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Bad&nbsp;Bunny"</span>)</div><div>&nbsp;&nbsp;}</div><div>&nbsp;&nbsp;<span style="color: #af00db;">else</span>&nbsp;-&gt;&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">println</span>(</div><div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"De&nbsp;ese&nbsp;género&nbsp;no&nbsp;conozco."</span>);</div><div>&nbsp;&nbsp;}</div><div>&nbsp;}</div><div>&nbsp;<span style="color: #795e26;">println</span>(<span style="color: #a31515;">"Adios."</span>);</div><div>}</div></div>
</muestra-codigo>
  <div class="lectura noPrint">
   <p class="noPrint">
    <a target="_blank"
      href="https://replit.com/@GilbertoPacheco/WhenElseKt?v=1">
     Revísalo Replit.
    </a>
   </p>
  </div>`;
 }
}

customElements.define("b-17-codigo-switch-default", BCodigo);