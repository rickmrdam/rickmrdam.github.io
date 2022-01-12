import { Diapositiva } from "../../lib/Diapositiva.js";

export class EResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Resumen</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los <dfn>comentarios</dfn> son secciones de código que no son
       procesadas y explican partes del programa para que se puedan
       entender mejor.
      </p>
     </li>
     <li>
      <p>
       Los
       <dfn>comentarios de una línea</dfn>
       empiezan con el texto
       <code
         class="language-kotlin"><span style="color: #008000;">//</span></code>
       y terminan con el final de la línea.
      </p>
     </li>
     <li>
      <p>
       Los
       <dfn>comentarios de una o más líneas</dfn>
       empiezan con el texto
       <code class="language-kotlin" style="color: #008000;">/*</code>
       y terminan con
       <code class="language-kotlin" style="color: #008000;">*/</code>.
      </p>
     </li>
     <li>
      <p>
       Los
       <dfn>comentarios de documentación</dfn>
       o
       <dfn>KDoc</dfn>,
       son comentarios de una o más líneas que empiezan con
       <code class="language-kotlin" style="color: #008000;">/**</code>
       y explican la definición de un elemento del código.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("e-resumen-4", EResumen);