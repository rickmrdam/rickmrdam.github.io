import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Irracionales extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. Números irracionales (&primes;) y reales (&reals;)</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Algunos campesinos que necesitaban calcular el número de semillas que
       necesitaban para sembrar sus campos. Para simplificar su trabajo,
       dividian el campo en triángulos, pues había fórmulas para calcular el
       área de un triángulo. A partir de aquí se desarrolló la trigonometría.
      </p>
      <figure>
       <img alt="Cálculo de área con triángulos"
         src="/15_numeros/img/octogono-irregular-area.jpg">
       <figcaption>Cálculo de área con triángulos.</figcaption>
      </figure>
     </li>
     <li>
      <p>
       Otros los hicieron con rectángulos. A partir de aquí se desarrolló el
       cálculo diferencial e integral.
      </p>
      <figure>
       <img alt="Cálculo de área con rectángulos"
         src="/15_numeros/img/figura-1.-rectc3a1ngulos-inscritos.webp">
       <figcaption>Cálculo de áre con rectángulos.</figcaption>
      </figure>
     </li>
     <li>
      <p>
       Al estudiar los triángulos descubrieron que en los triángulos
       rectángulos, la suma de los cuadrados de cada cateto es igual al cuadrado
       de la hipotenusa.
      </p>
     </li>
     <li>
      <p>
       Aunque este resultado se obtuvo en la antigua Babilonia (hoy Irak), llega
       a nosotros por medio de la escuela pitagórica de hace mucho, pero mucho
       tiempo, en lo que hoy es Grecia.
      </p>
     </li>
     <li>
      <p>
       En el siguiente triángulo, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.
      </p>
      <figure>
       <img alt="Teorema de pitágoras" src="/15_numeros/img/Pythagorean_right_angle.svg">
       <figcaption>De <a
          href="//commons.wikimedia.org/wiki/User:Marianov"
          title="User:Marianov">Marianov</a> - <span
          class="int-own-work" lang="es">Trabajo
         propio</span>, <a
          href="http://creativecommons.org/publicdomain/zero/1.0/deed.en"
          title="Creative Commons Zero, Public Domain Dedication">CC0</a>, <a
          href="https://commons.wikimedia.org/w/index.php?curid=42125657">Enlace</a>
       </figcaption>
      </figure>
     </li>
     <li>
      <p>
       La operación a<sup>2</sup> = (a)(a). Por ejemplo,
       3<sup>2</sup> = (3)(3) = 9.
      </p>
     </li>
     <li>
      <p>
       Para poder obtener el valor de la hipotenusa, se desarrolló la raíz
       cuadrada, de tal forma que si a<sup>2</sup> = b, entonces a = √b.
      </p>
     </li>
     <li>
      <p>Se sabía que si a y b valen 1, el valor de c es √2.</p>
     </li>
     <li>
      <p>
       Un miembro de la escuela pitagórica se dió cuenta de que √2 no se puede
       expresar como número racional; su escuela tenía como dogma que el
       Universo era perfecto y todo se podía expresar como números racionales. El
       descubridor murió; unos dicen que se suicidó y otros dicen que lo
       suicidaron en su escuela y sus miembros fingieron felicidad 🙄, aunque
       tenían el corazón partido 😢 y ocultaron este resultado al mundo 🤬, pero
       con el paso del tiempo todo el mundo se enteró de este resultado y no le
       importó.
      </p>
     </li>
     <li>
      <p>
       Los matemáticos volvieron a ser felices 😁, pero hubo algo que les rompió
       el corazón 😢.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("g-irracionales", Irracionales);