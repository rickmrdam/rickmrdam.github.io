import { Diapositiva } from "../../lib/Diapositiva.js";

export class B1Uso extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Uso de los sistemas operativos móviles</h1>
    <div class="lectura">
     <dl>
      <dt>Instalación</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Actualización</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Descargas</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Administración de cuentas</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Respaldos</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Seguridad</dt>
      <dd><p>Pendiente.</p></dd>
      <dt>Servicios</dt>
      <dd><p>Pendiente.</p></dd>
     </dl>
    </div>`;
 }
}

customElements.define("b-1-uso", B1Uso);