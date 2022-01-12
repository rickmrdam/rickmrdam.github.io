/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import "../10_multiple/cmp/multiple-contenido.js"
import "../11_melse/cmp/multiple-else-contenido.js"
import "../12_textos/cmp/textos-contenido.js"
import "../13_logicos/cmp/logicos-contenido.js"
import "../14_do_while/cmp/do-while-contenido.js"
import "../15_numeros/cmp/numeros-contenido.js"
import "../16_mas_numeros/cmp/mas-numeros-contenido.js"
import "../17_while/cmp/while-contenido.js"
import "../18_for/cmp/for-contenido.js"
import "../19_switch/cmp/switch-contenido.js"
import "../1_arquitectura/cmp/arquitectura-contenido.js"
import "../20_funciones/cmp/funciones-contenido.js"
import "../21_clases/cmp/clases-contenido.js"
import "../22_herencia/cmp/herencia-contenido.js"
import "../23_ejemplo/cmp/ejemplo-contenido.js"
import "../24_formulario/cmp/formulario-contenido.js"
import "../25_servicio/cmp/servicio-contenido.js"
import "../2_nativas/cmp/nativas-contenido.js"
import "../3_mvc/cmp/fundamentos-contenido.js"
import "../4_conceptos/cmp/conceptos-contenido.js"
import "../5_variables/cmp/variables-contenido.js"
import "../6_comentarios/cmp/comentarios-contenido.js"
import "../7_bloques/cmp/bloques-contenido.js"
import "../8_if/cmp/if-contenido.js"
import "../9_if_else/cmp/if-else-contenido.js"

export class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
   <h2>Contenido</h2>
    <ul>
     <li><p><a href="/index.html">Inicio</a></p></li>
     <li><p><a href="/b_sw.html">Software a instalar</a></p></li>
     <li>
      <h3>Lecciones</h3>
      <ol>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/1_arquitectura/index.html">Arquitectura de dispositivos móviles</a>
          </h4>
         </summary>
         <arquitectura-contenido></arquitectura-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/2_nativas/index.html">Aplicaciones nativas y multiplataforma</a>
          </h4>
         </summary>
         <nativas-contenido></nativas-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/3_mvc/index.html">MVC</a></h4>
         </summary>
         <fundamentos-contenido></fundamentos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/4_conceptos/index.html">Conceptos básicos</a>
          </h4>
         </summary>
         <conceptos-contenido></conceptos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/5_variables/index.html">Variables</a></h4>
         </summary>
         <variables-contenido></variables-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/6_comentarios/index.html">Comentarios</a></h4>
         </summary>
         <comentarios-contenido></comentarios-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/7_bloques/index.html">Bloques</a></h4>
         </summary>
         <bloques-contenido></bloques-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/8_if/index.html">La estructura de control <strong>if</strong></a>
          </h4>
         </summary>
         <if-contenido></if-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/9_if_else/index.html">La estructura de control
            <strong>if-else</strong></a>
          </h4>
         </summary>
         <if-else-contenido></if-else-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/10_multiple/index.html">Condicional múltiple</a></h4>
         </summary>
         <multiple-contenido></multiple-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/11_melse/index.html">Condicional múltiple con
            <strong>else</strong></a>
          </h4>
         </summary>
         <multiple-else-contenido></multiple-else-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/12_textos/index.html">Más textos</a></h4>
         </summary>
         <textos-contenido></textos-contenido>
         </details>
         </li>
         <li>
         <details>
         <summary>
         <h4><a href="/13_logicos/index.html">Operadores lógicos</a></h4>
         </summary>
         <logicos-contenido></logicos-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/14_do_while/index.html">La estructura de control
            <strong>do-while</strong></a>
          </h4>
         </summary>
         <do-while-contenido></do-while-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/15_numeros/index.html">Números</a></h4>
         </summary>
         <numeros-contenido></numeros-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/16_mas_numeros/index.html">Más números</a></h4>
         </summary>
         <mas-numeros-contenido></mas-numeros-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/17_while/index.html">La estructura de control
            <strong>while</strong></a>
          </h4>
         </summary>
         <while-contenido></while-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/18_for/index.html">La estructura de control <strong>for</strong></a>
          </h4>
         </summary>
         <for-contenido></for-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4>
           <a href="/19_switch/index.html">La estructura de control
           <strong>when</strong></a>
          </h4>
         </summary>
         <switch-contenido></switch-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/20_funciones/index.html">Funciones</a></h4>
         </summary>
         <funciones-contenido></funciones-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/21_clases/index.html">Clases</a></h4>
         </summary>
         <clases-contenido></clases-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/22_herencia/index.html">Herencia</a></h4>
         </summary>
         <herencia-contenido></herencia-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/23_ejemplo/index.html">Ejemplo de app Android</a></h4>
         </summary>
         <ejemplo-contenido></ejemplo-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/24_formulario/index.html">Formulario</a></h4>
         </summary>
         <formulario-contenido></formulario-contenido>
        </details>
       </li>
       <li>
        <details>
         <summary>
          <h4><a href="/25_servicio/index.html">Servicio</a></h4>
         </summary>
         <servicio-contenido></servicio-contenido>
        </details>
       </li>
      </ol>
     </li>
    </ul>
    </nav>`;
 }
}

customElements.define("mi-nav", MiNav);