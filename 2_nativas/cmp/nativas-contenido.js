import { Diapositiva } from "../../lib/Diapositiva.js";

export class NativasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/2_nativas/a_nativa.html">App nativa</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/b_multiplataforma.html">App
        multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/c_diferencias.html">Diferencias entre app
        nativa y app multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/d_ventajas_nativas.html">Ventajas de las
        app nativas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/e_desventajas_nativas.html">Desventajas de
        las app nativas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/f_ventajas_multiplataforma.html">Ventajas de
        las app multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/g_desventajas_multiplataforma.html">Desventajas
        de las App Multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/h_uso_nativas.html">Uso de las app
        nativas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/2_nativas/i_uso_multi.html">Uso de las app
        multiplataforma</a>
      </p>
     </li>
   </ol>`;
 }
}

customElements.define("nativas-contenido", NativasContenido);