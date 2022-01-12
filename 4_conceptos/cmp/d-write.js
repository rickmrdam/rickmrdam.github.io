import { Diapositiva } from "../../lib/Diapositiva.js";

export class DWrite extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
     D. Las instrucciones <strong>print</strong> y <strong>println</strong>
    </h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        La instrucción
        <dfn>
         <code class="language-kotlin">print</code>
        </dfn>
        muestra un texto en la salida.
       </p>
      </li>
      <li>
       <p>
        La instrucción
        <dfn>
         <code class="language-kotlin">println</code>
        </dfn>
        muestra un texto en la salida y posteriormente hace un salto de línea.
       </p>
      </li>
      <li>
       <p>Los textos se muestran sin los símbolos que los delimitan.</p>
      </li>
     </ul>
     <h2>Ejemplos</h2>
     <table class="borde">
      <thead>
       <tr>
        <th>Instrucción</th>
        <th>Salida</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <pre><code></code><span
           style="color: #795e26;">println</span>(<span
           style="color: #a31515;">"7!😁"</span>);</code></pre>
        </td>
        <td>
         <pre><samp>7!😁</samp></pre>
        </td>
       </tr>
       <tr>
        <td>
         <pre><code class="language-kotlin"><span
           style="color: #795e26;">print</span>(<span
           style="color: #a31515;">"Hola pp"</span>);</code></pre>
        </td>
        <td>
         <pre><samp>Hola pp</samp></pre>
        </td>
       </tr>
      </tbody>
     </table>
    </div>`;
 }
}

customElements.define("d-write", DWrite);