import { Diapositiva } from "../../lib/Diapositiva.js";

export class A16Enteros extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Tipos enteros</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Hay distintos tipos de enteros. La diferencia es cuantos números pueden representar
       y el número de bytes que utilizan.
     </p>
     </li>
     <li>
      <p>
       Una diferencia con las matemáticas es que son circulares. Si al número más positivo
       le sumas 1, obtienes el más negativo y si al más negativo le restas 1, obtienes el
       más positivo.
     </p>
     </li>
     </ul>
     <table class="borde">
      <tr>
       <th>Tipo</th><th>Tamaño (bits)</th><th>valor mínimo</th><th>Valor máximo</th>
      </tr>
      <tr>
       <th>Byte</th><td>8</td><td>-128</td><td>127</td>
      </tr>
      <tr>
       <th>Short</th><td>16</td><td>-32768</td><td>32767</td>
      </tr>
      <tr>
       <th>Int</th><td>32</td><td>-2,147,483,648</td><td>2,147,483,647</td>
      </tr>
      <tr>
       <th>Long</th><td>64</td><td>-9,223,372,036,854,775,808</td><td>9,223,372,036,854,775,807</td>
      </tr>
     </table>
     <h2>Números naturales</h2>
     <dl>
      <dt>UByte</dt>
      <dd><p>Enteros sin signo de 8 bits, de 0 a 255.</p></dd>
      <dt>UShort</dt>
      <dd><p>Enteros sin signo de 16 bits, de 0 a 65535.</p></dd>
      <dt>UInt</dt>
      <dd><p>Enteros sin signo de 32 bits, de 0 a 2<sup>32</sup> - 1.</p></dd>
      <dt>ULong</dt>
      <dd><p>Enteros sin signo de 64-bits, de 0 a 2<sup>64</sup> - 1.</p></dd>
     </dl>
   </div>`;
 }
}

customElements.define("a16-enteros", A16Enteros);