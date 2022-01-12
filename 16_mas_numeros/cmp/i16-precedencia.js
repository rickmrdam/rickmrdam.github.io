import { Diapositiva } from "../../lib/Diapositiva.js";

export class I16Precedencia extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Precedencia de Operadores</h1>
   <div class="lectura">
     <p>
       Aquí se muestra el orden en que se ejecutan los operadores de JavaScript
       cuando se combinan en una expresión. Los que aparecen primero son los que
       se ejecutan primero. Una tabla similar para Kotlin está en desarrollo.
     </p>
   </div>
   <table class="borde">
     <tr>
       <th>Orden</th>
       <th>Descripción</th>
       <th>Asociatividad</th>
       <th>Operador</th>
       <th>ejempo</th>
     </tr>
     <tr>
       <td>1</td>
       <td>agrupamiento</td>
       <td>n/a</td>
       <td><code
           class="language-kotlin"><strong>(</strong>…<strong>)</strong></code>
       </td>
       <td><code
           class="language-kotlin"><strong>(</strong>2 + 3<strong>)</strong></code>
       </td>
     </tr>
     <tr>
       <td rowspan="4">2</td>
       <td rowspan="2">miembro</td>
       <td rowspan="2">izquierda a derecha</td>
       <td><code class="language-kotlin">…<strong>.</strong>…</code></td>
       <td><code class="language-kotlin">a<strong>.</strong>b</code></td>
     </tr>
     <tr>
       <td><code
           class="language-kotlin">…<strong>[</strong>…<strong>]</strong></code>
       </td>
       <td><code
           class="language-kotlin">a<strong>[</strong>0<strong>]</strong></code>
       </td>
     </tr>
     <tr>
       <td>new</td>
       <td>n/a</td>
       <td><code
           class="language-kotlin"><strong>new</strong> …<strong>(</strong>…<strong>)</strong></code>
       </td>
       <td><code
           class="language-kotlin"><strong>new</strong> Clase<strong>(</strong>0<strong>)</strong></code>
       </td>
     </tr>
     <tr>
       <td>invocación a función</td>
       <td>izquierda a derecha</td>
       <td><code
           class="language-kotlin">…<strong>(</strong>…<strong>)</strong></code>
       </td>
       <td><code
           class="language-kotlin">fn<strong>(</strong>x<strong>)</strong></code>
       </td>
     </tr>
     <tr>
       <td rowspan="2">3</td>
       <td>incremento sufijo</td>
       <td>n/a</td>
       <td><code class="language-kotlin">…<strong>++</strong></code></td>
       <td><code class="language-kotlin">a<strong>++</strong></code></td>
     </tr>
     <tr>
       <td>decremento sufijo</td>
       <td>n/a</td>
       <td><code class="language-kotlin">…<strong>--</strong></code></td>
       <td><code class="language-kotlin">a<strong>--</strong></code></td>
     </tr>
     <tr>
       <td rowspan="9">4</td>
       <td>incremento prefijo</td>
       <td>n/a</td>
       <td><code class="language-kotlin"><strong>++</strong>…</code></td>
       <td><code class="language-kotlin"><strong>++</strong>a</code></td>
     </tr>
     <tr>
       <td>decremento prefijo</td>
       <td>n/a</td>
       <td><code class="language-kotlin"><strong>--</strong>…</code></td>
       <td><code class="language-kotlin"><strong>--</strong>a</code></td>
     </tr>
     <tr>
       <td>not lógico</td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>!</strong>…</code></td>
       <td><code class="language-kotlin"><strong>!</strong>a</code></td>
     </tr>
     <tr>
       <td>not a nivel de bits</td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>~</strong>…</code></td>
       <td><code class="language-kotlin"><strong>~</strong>a</code></td>
     </tr>
     <tr>
       <td>+ unario</a></td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>+</strong>…</code></td>
       <td><code class="language-kotlin"><strong>+</strong>a</code></td>
     </tr>
     <tr>
       <td>negación unaria</a></td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>-</strong>…</code></td>
       <td><code class="language-kotlin"><strong>-</strong>a</code></td>
     </tr>
     <tr>
       <td>typeof</td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>typeof</strong> …</code>
       </td>
       <td><code class="language-kotlin"><strong>typeof</strong> a</code>
       </td>
     </tr>
     <tr>
       <td>void</a></td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>void</strong> …</code>
       </td>
       <td><code class="language-kotlin"><strong>void</strong> a</code>
       </td>
     </tr>
     <tr>
       <td>delete</td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>delete</strong> …</code>
       </td>
       <td><code
           class="language-kotlin"><strong>delete</strong> a.nombre</code>
       </td>
     </tr>
     <tr>
       <td>5</td>
       <td>exponenciación</td>
       <td>n/a</td>
       <td><code class="language-kotlin">… <strong>**</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>**</strong> b</code>
       </td>
     </tr>
     <tr>
       <td rowspan="3">6</td>
       <td>multiplicación</a></td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>*</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>*</strong> b</code></td>
     </tr>
     <tr>
       <td>división</a></td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>/</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>/</strong> b</code></td>
     </tr>
     <tr>
       <td>residuo</a></td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>%</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>%</strong> b</code></td>
     </tr>
     <tr>
       <td rowspan="2">7</td>
       <td>suma</a></td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>+</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>+</strong> b</code></td>
     </tr>
     <tr>
       <td>resta</a></td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>-</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>-</strong> b</code></td>
     </tr>
     <tr>
       <td rowspan="3">8</td>
       <td rowspan="3">corrimiento de bits</a></td>
       <td rowspan="3">izquierda a derecha</td>
       <td><code
           class="language-kotlin">… <strong>&lt;&lt;</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">a <strong>&lt;&lt;</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>>></strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>>></strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>>>></strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>>>></strong> b</code>
       </td>
     </tr>
     <tr>
       <td rowspan="6">9</td>
       <td rowspan="4">relacional</td>
       <td rowspan="4">izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>&lt;</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>&lt;</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>&lt;=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>&lt;=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>></strong> …</code></td>
       <td><code class="language-kotlin">a <strong>></strong> b</code></td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>>=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>>=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>in</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>in</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">"nombre" <strong>in</strong> a</code>
       </td>
     </tr>
     <tr>
       <td>instanceof</td>
       <td>izquierda a derecha</td>
       <td><code
           class="language-kotlin">… <strong>instanceof</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">a <strong>instanceof</strong> Array</code>
       </td>
     </tr>
     <tr>
       <td rowspan="4">10</td>
       <td rowspan="4">igualdad</td>
       <td rowspan="4">izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>==</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>==</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>!=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>!=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>===</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>===</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>!==</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>!==</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>11</td>
       <td>and de bits</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>&amp;</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>&amp;</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>12</td>
       <td>xor de bits</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>^</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>^</strong> b</code></td>
     </tr>
     <tr>
       <td>13</td>
       <td>or de bits</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>|</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>|</strong> b</code></td>
     </tr>
     <tr>
       <td>14</td>
       <td>and lógico</td>
       <td>izquierda a derecha</td>
       <td><code
           class="language-kotlin">… <strong>&amp;&amp;</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">a <strong>&amp;&amp;</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>15</td>
       <td>or lógico</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>||</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>||</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>16</td>
       <td>condicional</td>
       <td>derecha a izquierda</td>
       <td><code
           class="language-kotlin">… <strong>?</strong> … <strong>:</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">a <strong>?</strong> b <strong>:</strong> c</code>
       </td>
     </tr>
     <tr>
       <td rowspan="12">17</td>
       <td rowspan="12">asignación</td>
       <td rowspan="12">derecha a izquierda</td>
       <td><code class="language-kotlin">… <strong>=</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>=</strong> b</code></td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>+=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>+=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>-=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>-=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>*=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>*=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>/=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>/=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>%=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>%=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code
           class="language-kotlin">… <strong>&lt;&lt;=</strong> …</code>
       </td>
       <td><code
           class="language-kotlin">a <strong>&lt;&lt;=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>>>=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>>>=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>>>>=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>>>>=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>&amp;=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>&amp;=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>^=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>^=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td><code class="language-kotlin">… <strong>|=</strong> …</code>
       </td>
       <td><code class="language-kotlin">a <strong>|=</strong> b</code>
       </td>
     </tr>
     <tr>
       <td>18</td>
       <td>yield</td>
       <td>derecha a izquierda</td>
       <td><code class="language-kotlin"><strong>yield</strong> …</code>
       </td>
       <td><code class="language-kotlin"><strong>yield</strong> a</code>
       </td>
     </tr>
     <tr>
       <td>19</td>
       <td>coma</td>
       <td>izquierda a derecha</td>
       <td><code class="language-kotlin">… <strong>,</strong> …</code></td>
       <td><code class="language-kotlin">a <strong>,</strong> b</code></td>
     </tr>
   </table>
   <div class="lectura">
     <p><small>Fuentes:</small></p>
     <ul>
       <li>
         <p>
           <small>
             <a
               href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence">https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence</a>
           </small>
         </p>
       </li>
       <li>
         <p>
           <small>
             <a
               href="https://www.w3schools.com/js/js_arithmetic.asp">https://www.w3schools.com/js/js_arithmetic.asp</a>
           </small>
         </p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("i16-precedencia", I16Precedencia);