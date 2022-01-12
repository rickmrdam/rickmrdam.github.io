import "../10_multiple/cmp/multiple-print.js";
import "../11_melse/cmp/multiple-else-print.js";
import "../12_textos/cmp/textos-print.js";
import "../13_logicos/cmp/logicos-print.js";
import "../14_do_while/cmp/do-while-print.js";
import "../15_numeros/cmp/numeros-print.js";
import "../16_mas_numeros/cmp/mas-numeros-print.js";
import "../17_while/cmp/while-print.js";
import "../18_for/cmp/for-print.js";
import "../19_switch/cmp/switch-print.js";
import "../1_arquitectura/cmp/arquitectura-print.js";
import "../20_funciones/cmp/funciones-print.js";
import "../21_clases/cmp/clases-print.js";
import "../22_herencia/cmp/herencia-print.js";
import "../23_ejemplo/cmp/ejemplo-print.js";
import "../24_formulario/cmp/formulario-print.js";
import "../25_servicio/cmp/servicio-print.js";
import "../2_nativas/cmp/nativas-print.js";
import "../3_mvc/cmp/fundamentos-print.js";
import "../4_conceptos/cmp/conceptos-print.js";
import "../5_variables/cmp/variables-print.js";
import "../6_comentarios/cmp/comentarios-print.js";
import "../7_bloques/cmp/bloques-print.js";
import "../8_if/cmp/if-print.js";
import "../9_if_else/cmp/if-else-print.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./b-sw.js";
import "./gilpgam-index.js";

export class GilPGAMPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<gilpgam-index></gilpgam-index>
    <mi-footer></mi-footer>
    <section>
     <h1 class="presentación">Software a Instalar</h1>
     <b-sw></b-sw>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">1. Arquitectura de dispositivos móviles</h1>
     <arquitectura-print></arquitectura-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">2. Aplicaciones nativas y multiplataforma</h1>
     <nativas-print></nativas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">3. MVC</h1>
     <fundamentos-print></fundamentos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">4. Conceptos básicos</h1>
     <conceptos-print></conceptos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">5. Variables</h1>
     <variables-print></variables-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">6. Comentarios</h1>
     <comentarios-print></comentarios-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">7. Bloques</h1>
     <bloques-print></bloques-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">8. La estructura de control <strong>if</strong></h1>
     <if-print></if-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      9. La estructura de control <strong>if-else</strong>
     </h1>
     <if-else-print></if-else-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">10. Condicional múltiple</h1>
     <multiple-print></multiple-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      11. Condicional múltiple con <strong>else</strong>
     </h1>
     <multiple-else-print></multiple-else-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">12. Más textos</h1>
     <textos-print></textos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">13. Operadores lógicos</h1>
     <logicos-print></logicos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      14. La estructura de control <strong>do-while</strong>
     </h1>
     <do-while-print></do-while-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">15. Números</h1>
     <numeros-print></numeros-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">16. Más números</h1>
     <mas-numeros-print></mas-numeros-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      17. La estructura de control <strong>while</strong>
     </h1>
     <while-print></while-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      18. La estructura de control <strong>for</strong>
     </h1>
     <for-print></for-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      19. La estructura de control <strong>when</strong>
     </h1>
     <switch-print></switch-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">20. Funciones</h1>
     <funciones-print></funciones-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">21. Clases</h1>
     <clases-print></clases-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">22. Herencia</h1>
     <herencia-print></herencia-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">23. Ejemplo de app Android</h1>
     <ejemplo-print></ejemplo-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">24. Formulario</h1>
     <formulario-print></formulario-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">25. servicio</h1>
     <servicio-print></servicio-print>
     <mi-footer></mi-footer>
    </section>`;
 }
}

customElements.define("gilpgam-print", GilPGAMPrint);