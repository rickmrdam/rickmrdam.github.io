import { Diapositiva } from "../../lib/Diapositiva.js";

export class Naturales extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Números naturales (&naturals;)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Son los números que usamos para contar.</p>
     </li>
     <li>
      <p>
       Para saber en que grupo hay más elementos, se pueden comparar entre sí.
       (Los matemáticos le dicen coordinar.)
      </p>
      <p>🍓🍓🍓🍓🍓<br>👼👼👼</p>
     </li>
     <li>
      <p>También se pueden contar con los dedos</p>
      <table>
       <tr>
        <td>🍓</td>
        <td>🍓</td>
        <td>🍓</td>
        <td>🍓</td>
        <td>🍓</td>
       </tr>
       <tr>
        <td>I</td>
        <td>I</td>
        <td>I</td>
        <td>I</td>
        <td>/</td>
       </tr>
      </table>
     </li>
     <li>
      <p>En romano, los números representan lo siguiente:</p>
      <dl>
       <dt>Ⅰ</dt>
       <dd>Un dedo, número 1.</dd>
       <dt>Ⅴ</dt>
       <dd>Una mano, 5 dedos, número 5.</dd>
       <dt>Ⅹ</dt>
       <dd>2 manos, 10 dedos, número 10.</dd>
      </dl>
     </li>
     <li>
      <p>
       Los mayas, al tener los dedos de los pies descubiertos, podian contar
       hasta
       el 20. Por eso su sistema numérico es de base 20.
      </p>
     </li>
     <li>
      <p>
       En Sumeria contaban con las 3 falanges de cada dedo, lo cual nos permite
       contar hasta 15 con cada dedo. Si consideramos los pies, podemos contar
       hasta 60. Por eso su sistema numérico es de base 60.
      </p>
      <pre>I I I I
I I I I
I I I I  /
        /
       /
     </pre>
     </li>
     <li>
      <p>Con el tiempo se prefirió el uso de ábacos.</p>
      <figure>
       <img alt="Imagen de un ábaco"
        src="/15_numeros/img/pexels-tara-winstead-6692937.jpg">
       <figcaption>
        Foto de Tara Winstead en <a href="https://www.pexels.com">Pexels</a>
       </figcaption>
      </figure>
     </li>
    </ul>
    <h2>En matemáticas</h2>
    <ul>
     <li>
      <p>Para los matemáticos el número base es el 0.</p>
     </li>
     <li>
      <p>
       El 1 se forma agregando una piedrita al 0, obteniendo 0'. A la piedrita se
       le llama operador sucesor; o sea que el 1 (0') es el sucesor de 0.
      </p>
     </li>
     <li>
      <p>
       El 2 se forma agregando una piedrita al 1, obteniendo 0''.
      </p>
     </li>
     <li>
      <p>
       Agregando piedritas generamos todos los números naturales.
      </p>
     </li>
     <li>
      <p>
       Los números naturales (&naturals;) se pueden expresar en diferentes
       sistemas de numeración.
      </p>
      <dl>
       <dt>Usando sucesores</dt>
       <dd>
        <p>0, 0', 0'', 0''', 0'''', ...</p>
       </dd>
       <dt>Notación binaria</dt>
       <dd>
        <p>0, 1, 10, 11, 100, ...</p>
       </dd>
       <dt>Notación decimal</dt>
       <dd>
        <p>0, 1, 2, 3, 4, ..., 9, 10 , 11, ...</p>
       </dd>
       <dt>Notación hexadecimal</dt>
       <dd>
        <p>0, 1, 2, 3, 4, ..., 9, A, B, ..., E, F, 10, 11, ..., 1F, 20, ...</p>
       </dd>
      </dl>
     </li>
     <li>
      <p>
       Todas las notaciones funcionan de manera parecida, pero cuando se usan,
       cada una tiene características que la hacen diferente a las otras.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a-naturales", Naturales);