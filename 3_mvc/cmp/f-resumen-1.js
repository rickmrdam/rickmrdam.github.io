import { Diapositiva } from "../../lib/Diapositiva.js";

export class FResumen extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Resumen</h1>
    <div class="lectura">
     <ul>
      <li>
       <p>
        Un
        <dfn>algoritmo</dfn>
        es un conjunto ordenado de intrucciones que se ejecutan una tras otra
        para realizar una tarea.
       </p>
      </li>
      <li>
       <p>
        El
        <dfn>proceso de información</dfn>
        es la manera en que normalmente se utilizan los datos en el software.
        Normalmente consta de 3 pasos que se ejecutan uno tras otro.
       </p>
       <ol>
        <li>
         <p>Adquisición de datos</p>
        </li>
        <li>
         <p>Procesamiento de datos</p>
        </li>
        <li>
         <p>Despliegue de resultados</p>
        </li>
       </ol>
      </li>
      <li>
       <p>
        Un
        <dfn>lenguaje de programación</dfn>
        es un conjunto de reglas precisas que se pueden usar para indicar a una
        computadora como realizar un algoritmo.
       </p>
      </li>
      <li>
       <p>
        Un
        <dfn>programa</dfn>
        o
        <dfn>código</dfn>
        es la representación de un algoritmo usando un lenguaje de programación.
       </p>
      </li>
      <li>
       <p>
        Un
        <dfn>pseudocódigo</dfn>
        es la especificación de un algoritmo usando texto informal parecido al
        lenguaje humano.
       </p>
      </li>
      <li>
       <p>
        Un
        <dfn>diagrama de flujo</dfn>
        es una forma de especificar un algoritmo usando dibujos con
        características bien definidas.
       </p>
      </li>
     </ul>
    </div>`;
 }
}

customElements.define("f-resumen-1", FResumen);