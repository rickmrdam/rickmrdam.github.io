import { Diapositiva } from "../../lib/Diapositiva.js";

export class BProceso extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Proceso de información</h1>
    <div class="lectura">
     <p>
      El
      <dfn>proceso de información</dfn>
      es la manera en que normalmente se utilizan los datos en el software.
      Normalmente consta de 3 pasos que se ejecutan uno tras otro:
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
     <h2>Definiciones</h2>
     <dl>
      <dt><dfn>Adquisición de datos</dfn></dt>
      <dt><dfn>Entrada de datos</dfn></dt>
      <dd>
       <p>Obtener los datos que se van a procesar.</p>
      </dd>
      <dt><dfn>Procesamiento de datos</dfn></dt>
      <dd>
       <p>
        Aplicar un mecanismo de transformación a los datos para obtener
        resultados, también conocidos como
        <dfn>datos de salida</dfn>.
       </p>
      </dd>
      <dt><dfn>Despliegue de resultados</dfn></dt>
      <dt><dfn>Salida de datos</dfn></dt>
      <dd>
       <p>
        Mostrar los resultados obtenidos. En algunos casos los datos de salida
        se almacenan en dispositivos externos a una computadora.
       </p>
      </dd>
     </dl>
    </div>`;
 }
}

customElements.define("b-proceso-1", BProceso);