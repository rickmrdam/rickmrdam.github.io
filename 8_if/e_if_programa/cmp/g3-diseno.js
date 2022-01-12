import { Diapositiva } from "../../../lib/Diapositiva.js";

export class G3Diseno extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G.3. Diseño</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>El programa debe seguir los pasos del siguiente pseudocódigo:</p>
      <ol>
       <li>
        <p>
         Preguntar al usuario <q>¿Qué fruta prefieres?</q> y esperar
         a que introduzca su respuesta, que se almacena en la variable
         <var>fruta</var>.
        </p>
       </li>
       <li>
        <p>
         <strong>Si</strong> el valor de <var>fruta</var> es <q>pera</q>,
         <br><strong>entonces</strong> mostrar
         <q>El que es 🍐, desespera.</q>
        </p>
       </li>
       <li>
        <p>
         Mostrar <q>Tu fruta: </q>, <var>fruta</var>.
        </p>
       </li>
      </ol>
     </li>
     <li>
      <p>También puedes diseñar tu solución usando diagramas de flujo.</p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("g3-diseno", G3Diseno);