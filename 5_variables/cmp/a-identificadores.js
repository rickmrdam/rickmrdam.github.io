import { Diapositiva } from "../../lib/Diapositiva.js";

export class AIdentificadores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Identificadores</h1>
   <div class="lectura">
    <p>
     Un <dfn>identificador</dfn> es el nombre que tiene un elemento de un
     programa y que no se puede repetir en ciertas partes del código.
    </p>
    <h2>Reglas que debe cumplir un identificador</h2>
    <ul>
     <li>
      <p>
       Empezar con una letra 
       (<code class="language-kotlin">a</code>
       –
       <code class="language-kotlin">z</code>
       o
       <code class="language-kotlin">A</code>
       –
       <code class="language-kotlin">Z</code>)
       con o sin acentos (á, ñ, por ejemplo)
       o guion bajo (<code class="language-kotlin">_</code>).
      </p>
     </li>
     <li>
      <p>
       Los caracteres siguientes pueden ser cualquiera de los
       anteriores o dígitos (<code class="language-kotlin">0</code>
       –
       <code class="language-kotlin">9</code>).
      </p>
     </li>
    </ul>
    <h2>Ejemplos</h2>
    <ul>
     <li><code class="language-kotlin">_nombre</code></li>
     <li><code class="language-kotlin">__nombre</code></li>
     <li><code class="language-kotlin">Nombre24</code></li>
     <li><code class="language-kotlin">_</code></li>
     <li><code class="language-kotlin">TaChido</code></li>
     <li><code class="language-kotlin">serenoMoreno</code></li>
     <li><code class="language-kotlin">h54</code></li>
    </ul>
    <h2>Camel case</h2>
    <p>
     Aunque no es obligatorio, normalmente en JavaScript los
     identificadores se escriben en <dfn>Camel Case</dfn>, donde las
     mayúsculas se usan para simular el inicio de una palabra. Por ejemplo:
    </p>
    <p><code class="language-kotlin">estasSonCuatroPalabras</code>.</p>
   </div>`;
 }
}

customElements.define("a-identificadores", AIdentificadores);