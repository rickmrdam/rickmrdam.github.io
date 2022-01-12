import { Diapositiva } from "../../../lib/Diapositiva.js";

export class G1Problema extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G.1. Definición del Problema</h1>
   <div class="lectura">
     <p>
       Antes de empezar a programar, hay que organizar el trabajo, entender
       el problema a resolver y plantear una solución.
     </p>
     <h2>Problema</h2>
     <p>
       Hacer un programa que pida al usuario la fruta que prefiere. Si la fruta
       es <em>pera</em>, mostrar el mensaje
       <samp>El que es 🍐, desespera.</samp>
       Finalmente debe mostrar la fruta introducida por el usuario.
     </p>
   </div>`;
 }
}

customElements.define("g1-problema", G1Problema);