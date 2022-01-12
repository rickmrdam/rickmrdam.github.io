import { Diapositiva } from "../../lib/Diapositiva.js";

export class GResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Un <dfn>identificador</dfn> es el nombre que tiene un elemento de un
       programa y que no se puede repetir en ciertas partes del código.
      </p>
     </li>
     <li>
      <p>Un identificador debe cumplir con las siguientes reglas:</p>
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
         con o sin acentos (á, ñ, por ejemplo),
         guion bajo (<code class="language-kotlin">_</code>)
        </p>
       </li>
       <li>
        <p>
         Los caracteres siguientes pueden ser cualquiera de los
         anteriores o dígitos (<code class="language-kotlin">0</code>
         – <code class="language-kotlin">9</code>).
        </p>
       </li>
      </ul>
     </li>
     <li>
      <p>
       Una
       <dfn>variable</dfn>
       es un lugar en donde se almacena un dato que puede cambiar durante la
       ejecución de un programa.
      </p>
     </li>
     <li>
      <p>
       Una
       <dfn>constante</dfn>
       es similar a una variable, pero su valor no puede cambiar una vez
       asignado.
      </p>
     </li>
     <li>
      <p>
       Las variables o constantes declaradas en el mismo espacio no pueden tener
       el mismo nombre.
      </p>
     </li>
     <li>
      <p>
       Cuando tratas de usar una variable o una constante no definida, obtienes
       un mensaje de error al compilar el programa.
      </p>
     </li>
     <li>
      <p>
       La función <dfn>readLine</dfn> sirve para pedir datos.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("g-resumen-3", GResumen);