import { Diapositiva } from "../../../lib/Diapositiva.js";

export class G2Escenarios extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G.2. Escenarios</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Los <dfn>escenarios</dfn> son ejemplos con datos para mostrar el
       comportamiento que debe tener el programa.
      </p>
     </li>
     <li>
      <p>
       Cuando el programa esté listo, se puede probar introduciendo los
       datos de entrada de cada escenario y el programa debe generar la
       salida correspondiente.
      </p>
     </li>
     <li>
      <p>
       Imagína un diálogo en cuál el programa inicia preguntando, luego espera
       a que el usuario conteste y finalmente el programa muestra resultados.
      </p>
     </li>
    </ul>
    <h2>Escenario: naranja</h2>
    <dl>
     <dt>Programa:</dt>
     <dd><samp>¿Qué fruta prefieres?</samp></dd>
     <dt>Usuario:</dt>
     <dd><kbd>naranja</kbd></dd>
     <dt>Programa:</dt>
     <dd><samp>Tu fruta: naranja</samp></dd>
    </dl>
    <h2>Escenario: pera</h2>
    <dl>
     <dt>Programa:</dt>
     <dd><samp>¿Qué fruta prefieres?</samp></dd>
     <dt>Usuario:</dt>
     <dd><kbd>pera</kbd></dd>
     <dt>Programa:</dt>
     <dd><samp>El que es 🍐, desespera.<br>Tu fruta: pera</samp></dd>
    </dl>
    <h2>Escenario: fresa</h2>
    <dl>
     <dt>Programa:</dt>
     <dd><samp>¿Qué fruta prefieres?</samp></dd>
     <dt>Usuario:</dt>
     <dd><kbd>fresa</kbd></dd>
     <dt>Programa:</dt>
     <dd><samp>Tu fruta: fresa</samp></dd>
    </dl>
   </div>`;
 }
}

customElements.define("g2-escenarios", G2Escenarios);