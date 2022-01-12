import { Diapositiva } from "../../lib/Diapositiva.js";

export class NumerosContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/15_numeros/a_naturales.html">Números naturales (&naturals;)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/b_cero.html">El 0</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/c_suma.html">La suma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/d_multiplicacion.html">La multiplicación</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/e_enteros.html">Números enteros (&integers;)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/f_racionales.html">Números racionales
        (&rationals;)</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/g_irracionales.html">Números irracionales (&primes;)
        y reales (&reals;)</a>
      </p>
     </li>
     <li>
       <p><a href="/15_numeros/h_rarezas.html">Rarezas</a></p>
     </li>
     <li>
      <p>
       <a href="/15_numeros/i_godel.html">Teoremas de Gödel</a>
      </p>
     </li>
     <li><p><a href="/15_numeros/j_resumen.html">Resumen</a></p></li>
    </ol>`;
 }
}

customElements.define("numeros-contenido", NumerosContenido);