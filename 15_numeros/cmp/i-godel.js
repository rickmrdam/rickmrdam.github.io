import { Diapositiva } from "../../lib/Diapositiva.js";

export class Godel extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Teoremas de Gödel</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Kurt Gödel demostró en los años 30 del siglo XX que aquellas matemáticas
       que razonen usando al menos los números naturales, tienen uno de 2
       problemas.
      </p>
      <dl>
       <dt>Contradicción</dt>
       <dd>
        <p>
         Hay algunas cosas que se puede demostrar que son falsas, pero también se
         puede demostrar que son verdaderas 😡.
        </p>
       </dd>
       <dt>Incompletez</dt>
       <dd>
        <p>
         Hay algunas cosas que no se puede demostrar si son verdaderas o son
         falsas 🙁.
        </p>
       </dd>
      </dl>
      <figure>
       <img alt="Foto de Kurt Gödel"
         src="/15_numeros/img/571px-Kurt-godel1.jpg">
       <figcaption>
        De <a target="_blank"
          href="//commons.wikimedia.org/w/index.php?title=User:Kedumuc10&amp;amp;action=edit&amp;amp;redlink=1"
          class="new"
          title="User:Kedumuc10 (page does not exist)">;Kedumuc10</a>; - <span
          class="int-own-work" lang="es">;Trabajo
         propio</span>;, <a target="_blank"
          href="https://creativecommons.org/licenses/by-sa/4.0"
          title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>,
        <a target="_blank"
          href="https://commons.wikimedia.org/w/index.php?curid=49253794">Enlace</a>
       </figcaption>
      </figure>
     </li>
     <li>
      <p>
       Otro de los problemas es que no se sabe cual es el problema hasta que te
       explota en la cara y que si ya encontraste el problema y lo arreglas,
       aparecerá otro problema de incompletez o de contradicción, pero una vez
       más no lo puedes detectar hasta que te explota en la cara.
      </p>
     </li>
     <li>
      <p>
       Aquí los matemáticos se volvieron infelices 😭. Algunos pretendieron que
       estos teoremas nunca existieron. Otros lo ocultaron. Otros pretendieron
       demostrar que el señor Gödel estaba mal.
      </p>
     </li>
     <li>
      <p>
       Lo que se consiguió fué demostrar de muchas formas que los teoremas de
       Gödel estaban bien, pero se pudo encontrar una salida: no usar conjuntos
       infinitos como los números naturales, enteros, racionales o reales 😜.
      </p>
     </li>
     <li>
      <p>
       Empezaron los estudios que llevaron a la Teoría Matemática de la
       Computación, a las computadoras, los videojuegos, las redes sociales,
       teniendo también la satisfacción de saber que las matemáticas con las que
       tanto nos torturaron en la escuela están dañadas y nunca las podrán
       arreglar. ¡Ja!¡Ja!¡Ja! 🤣🤣😂😈.
      </p>
     </li>
     <li>
      <p>
       Esto no quiere decir que las matemáticas no sirvan, pero tienen unas
       sorpresitas para los que las quieran usar. Úselas bajo su riesgo.
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("i-godel", Godel);