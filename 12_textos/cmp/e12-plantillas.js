import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E12Plantillas extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Plantillas de Texto</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       En el interior de las cadenas puedes poner la secuencia
       <code class="language-kotlin">&dollar;{}</code>,
       que permite poner en el interior de las llaves una expresión,
       cuyo resultado convertido a texto sustituye a toda esta secuencia.
      </p>
     </li>
     <li>
      <p>
       También puedes poner
       <code class="language-kotlin">&dollar;identificador</code>,
       que permite poner en el interior de las llaves el nombre de una variable,
       cuyo resultado convertido a texto sustituye a toda esta secuencia.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <pre><samp>Ejemplo de bb
828
de bb yy</samp></pre>
     <p class="noPrint">
      <a target="_blank"
        href="https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS41LjMwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiZnVuIG1haW4oKSB7XG4gdmFsIFRUID0gXCJiYlwiXG4gdmFyIFQgPSAyXG4gLyogTXVlc3RyYTogRWplbXBsbyBkZSBiYiAqL1xuIHByaW50bG4oXCJFamVtcGxvIGRlICRUVFwiKVxuIC8qIE11ZXN0cmE6IDgyOFxuZGUgYmIgeXkqL1xuIHByaW50bG4oXCJcIlwiJHtcIjhcIiArIFR9OFxuZGUgJHtUVH0geXlcIlwiXCIpO1xufSJ9">
       Revísalo en Kotlin play.
      </a>
     </p>
    </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #0000ff;">fun</span>&nbsp;<span
       style="color: #795e26;">main</span>()&nbsp;{</div>
    <div>&nbsp;<span style="color: #0000ff;">val</span>&nbsp;<span
       style="color: #267f99;">TT</span>&nbsp;=&nbsp;<span
       style="color: #a31515;">"bb"</span></div>
    <div>&nbsp;<span style="color: #0000ff;">var</span>&nbsp;<span
       style="color: #267f99;">T</span>&nbsp;=&nbsp;<span
       style="color: #098658;">2</span></div>
    <div>&nbsp;<span
       style="color: #008000;">/*&nbsp;Muestra:&nbsp;Ejemplo&nbsp;de&nbsp;bb&nbsp;*/</span>
    </div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"Ejemplo&nbsp;de&nbsp;$TT"</span>)</div>
    <div>&nbsp;<span style="color: #008000;">/*&nbsp;Muestra:&nbsp;828</span>
    </div>
    <div><span style="color: #008000;">de&nbsp;bb&nbsp;yy*/</span></div>
    <div>&nbsp;<span style="color: #795e26;">println</span>(<span
       style="color: #a31515;">"""&dollar;{"8"&nbsp;</span>+<span
       style="color: #a31515;">&nbsp;</span><span
       style="color: #267f99;">T</span><span style="color: #a31515;">}8</span>
    </div>
    <div><span style="color: #a31515;">de&nbsp;&dollar;{</span><span
       style="color: #267f99;">TT</span><span
       style="color: #a31515;">}&nbsp;yy"""</span>);</div>
    <div>}</div>
   </div>
      </muestra-codigo>
   </div>`;
 }
}

customElements.define("e12-plantillas", E12Plantillas);