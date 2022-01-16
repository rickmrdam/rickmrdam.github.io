/* Espera 11 minutos después de hacer los cambios en tu sitio, para después
 * actualizar este archivo. */
const CACHE = "rickmrdam-1.15";

/** Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
 "b_sw.html",
 "favicon.ico",
 "index.html",
 "LICENSE",
 "print.html",
 "site.webmanifest",
 "10_multiple/2_pres_m_1_true.html",
 "10_multiple/3_pres_m_2_true.html",
 "10_multiple/4_pres_m_false.html",
 "10_multiple/a_multiple.html",
 "10_multiple/b_codigo.html",
 "10_multiple/c_resumen.html",
 "10_multiple/index.html",
 "10_multiple/print.html",
 "10_multiple/5_m_prog/2_problema.html",
 "10_multiple/5_m_prog/3_escenarios.html",
 "10_multiple/5_m_prog/4_diseno.html",
 "10_multiple/5_m_prog/5_codigo.html",
 "10_multiple/5_m_prog/index.html",
 "10_multiple/cmp/a-multiple.js",
 "10_multiple/cmp/b-codigo-8.js",
 "10_multiple/cmp/c-resumen-8.js",
 "10_multiple/cmp/multiple-contenido.js",
 "10_multiple/cmp/multiple-index.js",
 "10_multiple/cmp/multiple-print.js",
 "10_multiple/img/condicional-multiple.svg",
 "10_multiple/src/1_m_1_true.html",
 "10_multiple/src/2_m_2_true.html",
 "10_multiple/src/3_m_false.html",
 "10_multiple/src/4_m_.kt",
 "11_melse/2_pres_melse_1_true.html",
 "11_melse/3_pres_melse_2_true.html",
 "11_melse/4_pres_melse_false.html",
 "11_melse/a_melse.html",
 "11_melse/b_codigo.html",
 "11_melse/c_resumen.html",
 "11_melse/index.html",
 "11_melse/print.html",
 "11_melse/5_melse_prog/2_problema.html",
 "11_melse/5_melse_prog/3_escenarios.html",
 "11_melse/5_melse_prog/4_diseno.html",
 "11_melse/5_melse_prog/5_codigo.html",
 "11_melse/5_melse_prog/index.html",
 "11_melse/5_melse_prog/img/condicional-multiple-else.svg",
 "11_melse/cmp/a-multiple-else.js",
 "11_melse/cmp/b-codigo-9.js",
 "11_melse/cmp/c-resumen-9.js",
 "11_melse/cmp/multiple-else-contenido.js",
 "11_melse/cmp/multiple-else-index.js",
 "11_melse/cmp/multiple-else-print.js",
 "11_melse/img/condicional-multiple-else.svg",
 "11_melse/img/condicional-multiple.svg",
 "11_melse/src/1_melse_1_true.html",
 "11_melse/src/2_melse_2_true.html",
 "11_melse/src/3_melse_false.html",
 "11_melse/src/4_melse.kt",
 "12_textos/a_enteros.html",
 "12_textos/b_flotantes.html",
 "12_textos/c_concatenacion.html",
 "12_textos/d_asignacion.html",
 "12_textos/e_plantillas.html",
 "12_textos/f_orden.html",
 "12_textos/g_orden_igualdad.html",
 "12_textos/h_resumen.html",
 "12_textos/index.html",
 "12_textos/print.html",
 "12_textos/cmp/a12-enteros.js",
 "12_textos/cmp/b12-flotantes.js",
 "12_textos/cmp/c12-concatenacion.js",
 "12_textos/cmp/d12-asignacion.js",
 "12_textos/cmp/e12-plantillas.js",
 "12_textos/cmp/f12-orden.js",
 "12_textos/cmp/g12-orden-igualdad.js",
 "12_textos/cmp/h12-resumen.js",
 "12_textos/cmp/textos-contenido.js",
 "12_textos/cmp/textos-index.js",
 "12_textos/cmp/textos-print.js",
 "12_textos/src/1_concatenacion.kt",
 "12_textos/src/2_asignacion.kt",
 "12_textos/src/3_plantillas.kt",
 "12_textos/src/4_ops_orden.kt",
 "12_textos/src/5_ops_orden_igualdad.kt",
 "13_logicos/a_op_y.html",
 "13_logicos/b_op_o.html",
 "13_logicos/c_op_no.html",
 "13_logicos/d_op_ternario.html",
 "13_logicos/e_resumen.html",
 "13_logicos/index.html",
 "13_logicos/print.html",
 "13_logicos/cmp/a-op-y.js",
 "13_logicos/cmp/b-op-o.js",
 "13_logicos/cmp/c-op-no.js",
 "13_logicos/cmp/d-op-ternario.js",
 "13_logicos/cmp/e-resumen-11.js",
 "13_logicos/cmp/logicos-contenido.js",
 "13_logicos/cmp/logicos-index.js",
 "13_logicos/cmp/logicos-print.js",
 "13_logicos/src/1_op_y.kt",
 "13_logicos/src/2_op_o.kt",
 "13_logicos/src/3_op_no.kt",
 "13_logicos/src/4_op_ternario.kt",
 "14_do_while/a_do_while.html",
 "14_do_while/b_codigo.html",
 "14_do_while/c_resumen.html",
 "14_do_while/index.html",
 "14_do_while/print.html",
 "14_do_while/3_do_while_prog/2_problema.html",
 "14_do_while/3_do_while_prog/3_escenarios.html",
 "14_do_while/3_do_while_prog/4_diseno.html",
 "14_do_while/3_do_while_prog/5_codigo.html",
 "14_do_while/3_do_while_prog/index.html",
 "14_do_while/cmp/a-do-while.js",
 "14_do_while/cmp/b-codigo-12.js",
 "14_do_while/cmp/c-resumen-12.js",
 "14_do_while/cmp/do-while-contenido.js",
 "14_do_while/cmp/do-while-index.js",
 "14_do_while/cmp/do-while-print.js",
 "14_do_while/img/do-while.png",
 "14_do_while/img/do-while.svg",
 "14_do_while/src/1_do_while.html",
 "14_do_while/src/2_do_while_prog.kt",
 "15_numeros/a_naturales.html",
 "15_numeros/b_cero.html",
 "15_numeros/c_suma.html",
 "15_numeros/d_multiplicacion.html",
 "15_numeros/e_enteros.html",
 "15_numeros/f_racionales.html",
 "15_numeros/g_irracionales.html",
 "15_numeros/h_rarezas.html",
 "15_numeros/index.html",
 "15_numeros/i_godel.html",
 "15_numeros/j_resumen.html",
 "15_numeros/print.html",
 "15_numeros/cmp/a-naturales.js",
 "15_numeros/cmp/b-cero.js",
 "15_numeros/cmp/c-suma.js",
 "15_numeros/cmp/d-multiplicacion.js",
 "15_numeros/cmp/e-enteros.js",
 "15_numeros/cmp/f-racionales.js",
 "15_numeros/cmp/g-irracionales.js",
 "15_numeros/cmp/h-rarezas.js",
 "15_numeros/cmp/i-godel.js",
 "15_numeros/cmp/j-resumen-13.js",
 "15_numeros/cmp/numeros-contenido.js",
 "15_numeros/cmp/numeros-index.js",
 "15_numeros/cmp/numeros-print.js",
 "15_numeros/img/480px-India_(orthographic_projection).svg.png",
 "15_numeros/img/571px-Kurt-godel1.jpg",
 "15_numeros/img/figura-1.-rectc3a1ngulos-inscritos.webp",
 "15_numeros/img/octogono-irregular-area.jpg",
 "15_numeros/img/pexels-tara-winstead-6692937.jpg",
 "15_numeros/img/pexels-yan-krukov-8613095.jpg",
 "15_numeros/img/Pythagorean_right_angle.svg",
 "16_mas_numeros/a_enteros.html",
 "16_mas_numeros/b_recta.html",
 "16_mas_numeros/c_ops_num.html",
 "16_mas_numeros/d_asignacion.html",
 "16_mas_numeros/e_incr_y_decr.html",
 "16_mas_numeros/f_igualdad.html",
 "16_mas_numeros/g_orden.html",
 "16_mas_numeros/h_orden_igualdad.html",
 "16_mas_numeros/index.html",
 "16_mas_numeros/i_precedencia.html",
 "16_mas_numeros/j_expresiones.html",
 "16_mas_numeros/k_resumen.html",
 "16_mas_numeros/print.html",
 "16_mas_numeros/cmp/a16-enteros.js",
 "16_mas_numeros/cmp/b16-recta.js",
 "16_mas_numeros/cmp/c16-ops-num.js",
 "16_mas_numeros/cmp/d16-asignacion.js",
 "16_mas_numeros/cmp/e16-incr-y-decr.js",
 "16_mas_numeros/cmp/f16-igualdad.js",
 "16_mas_numeros/cmp/g16-orden.js",
 "16_mas_numeros/cmp/h16-orden-igualdad.js",
 "16_mas_numeros/cmp/i16-precedencia.js",
 "16_mas_numeros/cmp/j16-expresiones.js",
 "16_mas_numeros/cmp/k16-resumen.js",
 "16_mas_numeros/cmp/mas-numeros-contenido.js",
 "16_mas_numeros/cmp/mas-numeros-index.js",
 "16_mas_numeros/cmp/mas-numeros-print.js",
 "16_mas_numeros/img/cuadratica.png",
 "16_mas_numeros/img/recta.png",
 "16_mas_numeros/img/recta.svg",
 "16_mas_numeros/src/1_ops_num.kt",
 "16_mas_numeros/src/2_asignacion_num.kt",
 "16_mas_numeros/src/3_incr_y_decr.kt",
 "16_mas_numeros/src/4_op_igual.kt",
 "16_mas_numeros/src/5_orden.kt",
 "16_mas_numeros/src/6_op_orden_igual.kt",
 "17_while/a_while.html",
 "17_while/b_pres_while_asc.html",
 "17_while/c_pres_while_asc_2.html",
 "17_while/d_pres_while_desc.html",
 "17_while/e_pres_while_desc_2.html",
 "17_while/f_pres_while_no_ejec.html",
 "17_while/g_pres_while_desc_mal.html",
 "17_while/h_pres_while_asc_mal.html",
 "17_while/index.html",
 "17_while/i_resumen.html",
 "17_while/print.html",
 "17_while/cmp/a-15-while.js",
 "17_while/cmp/b-15-pres-while-asc.js",
 "17_while/cmp/c-15-pres-while-asc-2.js",
 "17_while/cmp/d-15-pres-while-desc.js",
 "17_while/cmp/e-15-pres-while-desc-2.js",
 "17_while/cmp/f-15-pres-while-no-ejec.js",
 "17_while/cmp/g-15-pres-while-desc-mal.js",
 "17_while/cmp/h-15-pres-while-asc-mal.js",
 "17_while/cmp/i-15-resumen.js",
 "17_while/cmp/while-contenido.js",
 "17_while/cmp/while-index.js",
 "17_while/cmp/while-print.js",
 "17_while/img/while.svg",
 "17_while/src/1_while_asc.kt",
 "17_while/src/2_while_asc_2.kt",
 "17_while/src/3_while_desc.kt",
 "17_while/src/4_while_desc_2.kt",
 "17_while/src/5_while_no_ej.kt",
 "17_while/src/6_while_desc_mal.kt",
 "17_while/src/7_while_asc_mal.kt",
 "18_for/a_for.html",
 "18_for/b_pres_for.html",
 "18_for/c_resumen.html",
 "18_for/index.html",
 "18_for/print.html",
 "18_for/3_for_prog/2_problema.html",
 "18_for/3_for_prog/3_escenarios.html",
 "18_for/3_for_prog/4_diseno.html",
 "18_for/3_for_prog/5_codigo.html",
 "18_for/3_for_prog/index.html",
 "18_for/cmp/a-16-for.js",
 "18_for/cmp/b-16-codigo.js",
 "18_for/cmp/c-16-resumen.js",
 "18_for/cmp/for-contenido.js",
 "18_for/cmp/for-index.js",
 "18_for/cmp/for-print.js",
 "18_for/img/for.svg",
 "18_for/src/1_for_asc.kt",
 "19_switch/a_codigo_switch.html",
 "19_switch/a_switch.html",
 "19_switch/b_codigo_switch_default.html",
 "19_switch/c_switch_default.html",
 "19_switch/e_resumen.html",
 "19_switch/index.html",
 "19_switch/print.html",
 "19_switch/cmp/a-17-codigo-switch.js",
 "19_switch/cmp/a-17-switch.js",
 "19_switch/cmp/b-17-codigo-switch-default.js",
 "19_switch/cmp/c-17-switch-default.js",
 "19_switch/cmp/e-17-resumen.js",
 "19_switch/cmp/switch-contenido.js",
 "19_switch/cmp/switch-index.js",
 "19_switch/cmp/switch-print.js",
 "19_switch/img/switch-default.svg",
 "19_switch/img/switch.svg",
 "19_switch/src/1_switch.kt",
 "19_switch/src/2_switch_default.kt",
 "1_arquitectura/a_caracteristicas.html",
 "1_arquitectura/b_uso.html",
 "1_arquitectura/c_componentes.html",
 "1_arquitectura/index.html",
 "1_arquitectura/print.html",
 "1_arquitectura/cmp/a-1-caracteristicas.js",
 "1_arquitectura/cmp/arquitectura-contenido.js",
 "1_arquitectura/cmp/arquitectura-index.js",
 "1_arquitectura/cmp/arquitectura-print.js",
 "1_arquitectura/cmp/b-1-uso.js",
 "1_arquitectura/cmp/c-1-componentes.js",
 "20_funciones/a_funciones.html",
 "20_funciones/b_funciones_funciones.html",
 "20_funciones/c_funciones_parametros.html",
 "20_funciones/d_funciones_parametros_expresiones.html",
 "20_funciones/e_funciones_return.html",
 "20_funciones/f_flecha.html",
 "20_funciones/g_recursividad.html",
 "20_funciones/index.html",
 "20_funciones/print.html",
 "20_funciones/cmp/a1-funciones.js",
 "20_funciones/cmp/b1-funciones-funciones.js",
 "20_funciones/cmp/c1-funciones-parametros.js",
 "20_funciones/cmp/d1-funciones-parametros-expresiones.js",
 "20_funciones/cmp/e1-funciones-return.js",
 "20_funciones/cmp/f1-flecha.js",
 "20_funciones/cmp/funciones-contenido.js",
 "20_funciones/cmp/funciones-index.js",
 "20_funciones/cmp/funciones-print.js",
 "20_funciones/cmp/g1-recursividad.js",
 "20_funciones/src/1_funciones.kt",
 "20_funciones/src/2_funciones_funciones.kt",
 "20_funciones/src/3_funciones_parametros.kt",
 "20_funciones/src/4_funciones_parametros_expresiones.kt",
 "20_funciones/src/5_funciones_return.kt",
 "20_funciones/src/6_funciones_flecha.kt",
 "20_funciones/src/7_recursividad.kt",
 "21_clases/a_clases.html",
 "21_clases/b_setters.html",
 "21_clases/index.html",
 "21_clases/print.html",
 "21_clases/2_objetos/objeto0101.html",
 "21_clases/2_objetos/objeto0102.html",
 "21_clases/2_objetos/objeto0103.html",
 "21_clases/2_objetos/objeto0104.html",
 "21_clases/2_objetos/objeto0105.html",
 "21_clases/2_objetos/objeto0106.html",
 "21_clases/2_objetos/objeto0107.html",
 "21_clases/2_objetos/objeto0108.html",
 "21_clases/2_objetos/objeto0109.html",
 "21_clases/2_objetos/objeto0110.html",
 "21_clases/2_objetos/objeto0111.html",
 "21_clases/2_objetos/objeto0112.html",
 "21_clases/2_objetos/objeto0113.html",
 "21_clases/2_objetos/objeto0114.html",
 "21_clases/2_objetos/objeto0115.html",
 "21_clases/cmp/a21-clases.js",
 "21_clases/cmp/b21-setters.js",
 "21_clases/cmp/clases-contenido.js",
 "21_clases/cmp/clases-index.js",
 "21_clases/cmp/clases-print.js",
 "21_clases/img/hormiga1.svg",
 "21_clases/img/hormiga2.svg",
 "21_clases/img/hormiga3.svg",
 "21_clases/img/hormiga4.svg",
 "21_clases/src/a_clase.kt",
 "21_clases/src/b_getters.kt",
 "22_herencia/a_constructores.html",
 "22_herencia/b_sobreescritura.html",
 "22_herencia/index.html",
 "22_herencia/print.html",
 "22_herencia/cmp/a22-constructores.js",
 "22_herencia/cmp/b22-sobreescritura.js",
 "22_herencia/cmp/herencia-contenido.js",
 "22_herencia/cmp/herencia-index.js",
 "22_herencia/cmp/herencia-print.js",
 "22_herencia/src/a_constructores.kt",
 "22_herencia/src/b_sobreescritura.kt",
 "23_ejemplo/a_instrucciones.html",
 "23_ejemplo/b_archivos.html",
 "23_ejemplo/c_strings.html",
 "23_ejemplo/d_activity_main.html",
 "23_ejemplo/e_MainActivity.html",
 "23_ejemplo/f_AndroidManifest.html",
 "23_ejemplo/index.html",
 "23_ejemplo/print.html",
 "23_ejemplo/cmp/a23-instrucciones.js",
 "23_ejemplo/cmp/b23-archivos.js",
 "23_ejemplo/cmp/c23-strings.js",
 "23_ejemplo/cmp/d23-activity-main.js",
 "23_ejemplo/cmp/e23-main-activity.js",
 "23_ejemplo/cmp/ejemplo-contenido.js",
 "23_ejemplo/cmp/ejemplo-index.js",
 "23_ejemplo/cmp/ejemplo-print.js",
 "23_ejemplo/cmp/f23-android-manifest.js",
 "23_ejemplo/img/dis.png",
 "23_ejemplo/img/vista.png",
 "24_formulario/a_instrucciones.html",
 "24_formulario/b_archivos.html",
 "24_formulario/c_strings.html",
 "24_formulario/d_activity_main.html",
 "24_formulario/e_MainActivity.html",
 "24_formulario/f_AndroidManifest.html",
 "24_formulario/index.html",
 "24_formulario/print.html",
 "24_formulario/cmp/a24-instrucciones.js",
 "24_formulario/cmp/b24-archivos.js",
 "24_formulario/cmp/c24-strings.js",
 "24_formulario/cmp/d24-activity-main.js",
 "24_formulario/cmp/e24-main-activity.js",
 "24_formulario/cmp/f24-android-manifest.js",
 "24_formulario/cmp/formulario-contenido.js",
 "24_formulario/cmp/formulario-index.js",
 "24_formulario/cmp/formulario-print.js",
 "24_formulario/img/dis.png",
 "24_formulario/img/vista.png",
 "24_formulario/img/vista2.png",
 "24_formulario/img/vista3.png",
 "25_servicio/a_instrucciones.html",
 "25_servicio/b_archivos.html",
 "25_servicio/c_index.html",
 "25_servicio/d_strings.html",
 "25_servicio/e_activity_main.html",
 "25_servicio/f_MainActivity.html",
 "25_servicio/g_AndroidManifest.html",
 "25_servicio/index.html",
 "25_servicio/print.html",
 "25_servicio/cmp/a25-instrucciones.js",
 "25_servicio/cmp/b25-archivos.js",
 "25_servicio/cmp/c25-index.js",
 "25_servicio/cmp/d25-strings.js",
 "25_servicio/cmp/e25-activity-main.js",
 "25_servicio/cmp/f25-main-activity.js",
 "25_servicio/cmp/g25-android-manifest.js",
 "25_servicio/cmp/servicio-contenido.js",
 "25_servicio/cmp/servicio-index.js",
 "25_servicio/cmp/servicio-print.js",
 "25_servicio/img/dis.png",
 "25_servicio/img/vista.png",
 "25_servicio/img/vista2.png",
 "25_servicio/src/index.php",
 "2_nativas/a_nativa.html",
 "2_nativas/b_multiplataforma.html",
 "2_nativas/c_diferencias.html",
 "2_nativas/d_ventajas_nativas.html",
 "2_nativas/e_desventajas_nativas.html",
 "2_nativas/f_ventajas_multiplataforma.html",
 "2_nativas/g_desventajas_multiplataforma.html",
 "2_nativas/h_uso_nativas.html",
 "2_nativas/index.html",
 "2_nativas/i_uso_multi.html",
 "2_nativas/print.html",
 "2_nativas/cmp/a2-nativa.js",
 "2_nativas/cmp/b2-multiplataforma.js",
 "2_nativas/cmp/c2-diferencias.js",
 "2_nativas/cmp/d2-ventajas-nativas.js",
 "2_nativas/cmp/e2-desventajas-nativas.js",
 "2_nativas/cmp/f2-ventajas-multi.js",
 "2_nativas/cmp/g2-desventajas-multi.js",
 "2_nativas/cmp/h2-uso-nativas.js",
 "2_nativas/cmp/i2-uso-multi.js",
 "2_nativas/cmp/nativas-contenido.js",
 "2_nativas/cmp/nativas-index.js",
 "2_nativas/cmp/nativas-print.js",
 "3_mvc/a_algoritmo.html",
 "3_mvc/b_proceso.html",
 "3_mvc/c_lenguaje.html",
 "3_mvc/d_pseudocodigo.html",
 "3_mvc/e_diagrama.html",
 "3_mvc/f_resumen.html",
 "3_mvc/index.html",
 "3_mvc/print.html",
 "3_mvc/cmp/a-algoritmo-1.js",
 "3_mvc/cmp/b-proceso-1.js",
 "3_mvc/cmp/c-lenguaje-1.js",
 "3_mvc/cmp/d-pseudocodigo-1.js",
 "3_mvc/cmp/e-diagrama-1.js",
 "3_mvc/cmp/f-resumen-1.js",
 "3_mvc/cmp/fundamentos-contenido.js",
 "3_mvc/cmp/fundamentos-index.js",
 "3_mvc/cmp/fundamentos-print.js",
 "4_conceptos/a_js.html",
 "4_conceptos/b_textos.html",
 "4_conceptos/c_string.html",
 "4_conceptos/d_write.html",
 "4_conceptos/e_orden.html",
 "4_conceptos/f_resumen.html",
 "4_conceptos/index.html",
 "4_conceptos/print.html",
 "4_conceptos/6_pres/1.html",
 "4_conceptos/6_pres/2.html",
 "4_conceptos/6_pres/3.html",
 "4_conceptos/6_pres/index.html",
 "4_conceptos/cmp/a-js.js",
 "4_conceptos/cmp/b-textos.js",
 "4_conceptos/cmp/c-string.js",
 "4_conceptos/cmp/conceptos-contenido.js",
 "4_conceptos/cmp/conceptos-index.js",
 "4_conceptos/cmp/conceptos-print.js",
 "4_conceptos/cmp/d-write.js",
 "4_conceptos/cmp/e-orden.js",
 "4_conceptos/cmp/f-resumen-2.js",
 "4_conceptos/img/Cadena.svg",
 "4_conceptos/img/Eslabon.svg",
 "4_conceptos/img/winlogo.png",
 "4_conceptos/img/winlogo.xcf",
 "4_conceptos/src/1_orden.kt",
 "5_variables/a_identificadores.html",
 "5_variables/b_variables.html",
 "5_variables/c_constantes.html",
 "5_variables/d_duplicadas.html",
 "5_variables/e_no_encontradas.html",
 "5_variables/f_prompt.html",
 "5_variables/g_resumen.html",
 "5_variables/index.html",
 "5_variables/print.html",
 "5_variables/3_pres_var/1.html",
 "5_variables/3_pres_var/2.html",
 "5_variables/3_pres_var/3.html",
 "5_variables/3_pres_var/4.html",
 "5_variables/3_pres_var/5.html",
 "5_variables/3_pres_var/6.html",
 "5_variables/3_pres_var/7.html",
 "5_variables/3_pres_var/8.html",
 "5_variables/3_pres_var/9.html",
 "5_variables/3_pres_var/index.html",
 "5_variables/cmp/a-identificadores.js",
 "5_variables/cmp/b-variables.js",
 "5_variables/cmp/c-constantes.js",
 "5_variables/cmp/d-duplicadas.js",
 "5_variables/cmp/e-no-encontradas.js",
 "5_variables/cmp/f-prompt.js",
 "5_variables/cmp/g-resumen-3.js",
 "5_variables/cmp/variables-contenido.js",
 "5_variables/cmp/variables-index.js",
 "5_variables/cmp/variables-print.js",
 "5_variables/src/1_variables.kt",
 "5_variables/src/2_constantes.kt",
 "5_variables/src/3_duplicados.kt",
 "5_variables/src/4_no_definida.kt",
 "5_variables/src/5_prompt.kt",
 "6_comentarios/a_comentarios.html",
 "6_comentarios/b_com_1.html",
 "6_comentarios/c_com_1_o_mas.html",
 "6_comentarios/d_JsDoc.html",
 "6_comentarios/e_resumen.html",
 "6_comentarios/index.html",
 "6_comentarios/print.html",
 "6_comentarios/3_pres_com_1/1.html",
 "6_comentarios/3_pres_com_1/2.html",
 "6_comentarios/3_pres_com_1/index.html",
 "6_comentarios/5_pres_1_o_mas/1.html",
 "6_comentarios/5_pres_1_o_mas/2.html",
 "6_comentarios/5_pres_1_o_mas/3.html",
 "6_comentarios/5_pres_1_o_mas/index.html",
 "6_comentarios/cmp/a-comentarios.js",
 "6_comentarios/cmp/b-com-1.js",
 "6_comentarios/cmp/c-com-1-o-mas.js",
 "6_comentarios/cmp/comentarios-contenido.js",
 "6_comentarios/cmp/comentarios-index.js",
 "6_comentarios/cmp/comentarios-print.js",
 "6_comentarios/cmp/d-jsdoc.js",
 "6_comentarios/cmp/e-resumen-4.js",
 "6_comentarios/src/1_comentarios_una.kt",
 "6_comentarios/src/2_comentarios_una_o_mas.kt",
 "6_comentarios/src/3_JsDoc.kt",
 "7_bloques/a_bloques.html",
 "7_bloques/b_pres_bloque.html",
 "7_bloques/c_pres_bloque_v_d.html",
 "7_bloques/d_resumen.html",
 "7_bloques/index.html",
 "7_bloques/print.html",
 "7_bloques/cmp/a-bloques.js",
 "7_bloques/cmp/b-pres-bloque.js",
 "7_bloques/cmp/bloques-contenido.js",
 "7_bloques/cmp/bloques-index.js",
 "7_bloques/cmp/bloques-print.js",
 "7_bloques/cmp/c-pres-bloque-v-d.js",
 "7_bloques/cmp/d-resumen.js",
 "7_bloques/src/1_bloques.kt",
 "7_bloques/src/2_dup_blk.kt",
 "8_if/a_boolean.html",
 "8_if/b_txt_igualdad.html",
 "8_if/c_txt_diferente.html",
 "8_if/d_if.html",
 "8_if/e_codigo.html",
 "8_if/e_if_true.html",
 "8_if/f_if_false.html",
 "8_if/h_resumen.html",
 "8_if/index.html",
 "8_if/print.html",
 "8_if/cmp/a-boolean.js",
 "8_if/cmp/b-txt-igualdad.js",
 "8_if/cmp/c-txt-diferente.js",
 "8_if/cmp/d-if.js",
 "8_if/cmp/e-if-true.js",
 "8_if/cmp/e8-codigo.js",
 "8_if/cmp/f-if-false.js",
 "8_if/cmp/h-resumen.js",
 "8_if/cmp/if-contenido.js",
 "8_if/cmp/if-index.js",
 "8_if/cmp/if-print.js",
 "8_if/e_if_programa/1_problema.html",
 "8_if/e_if_programa/2_escenarios.html",
 "8_if/e_if_programa/3_diseno.html",
 "8_if/e_if_programa/4_codigo.html",
 "8_if/e_if_programa/index.html",
 "8_if/e_if_programa/cmp/bloques-contenido.js",
 "8_if/e_if_programa/cmp/bloques-index.js",
 "8_if/e_if_programa/cmp/g-if-programa-contenido.js",
 "8_if/e_if_programa/cmp/g-if-programa-index.js",
 "8_if/e_if_programa/cmp/g1-problema.js",
 "8_if/e_if_programa/cmp/g2-escenarios.js",
 "8_if/e_if_programa/cmp/g3-diseno.js",
 "8_if/e_if_programa/cmp/g4-codigo.js",
 "8_if/img/if.svg",
 "8_if/src/1_op_igual.kt",
 "8_if/src/2_op_diferente.kt",
 "8_if/src/3_if_true.html",
 "8_if/src/4_if_false.html",
 "8_if/src/4_if_programa.kt",
 "9_if_else/2_if_else_true.html",
 "9_if_else/3_if_else_false.html",
 "9_if_else/a_if_else.html",
 "9_if_else/b_codigo.html",
 "9_if_else/c_resumen.html",
 "9_if_else/index.html",
 "9_if_else/print.html",
 "9_if_else/4_if_else_programa/2_problema.html",
 "9_if_else/4_if_else_programa/3_escenarios.html",
 "9_if_else/4_if_else_programa/4_diseno.html",
 "9_if_else/4_if_else_programa/5_codigo.html",
 "9_if_else/4_if_else_programa/index.html",
 "9_if_else/cmp/a-if-else.js",
 "9_if_else/cmp/b-codigo-7.js",
 "9_if_else/cmp/c-resumen-7.js",
 "9_if_else/cmp/if-else-contenido.js",
 "9_if_else/cmp/if-else-index.js",
 "9_if_else/cmp/if-else-print.js",
 "9_if_else/img/if-else.svg",
 "9_if_else/src/1_if_else_true.html",
 "9_if_else/src/2_if_else.kt",
 "9_if_else/src/2_if_else_false.html",
 "cmp/b-sw.js",
 "cmp/rickmram-index.js",
 "cmp/rickmram-print.js",
 "cmp/mi-nav.js",
 "css/estilos.css",
 "img/80x15.png",
 "img/icono1024.png",
 "img/icono2048.png",
 "img/icono256.png",
 "js/config.js",
 "lib/Diapositiva.js",
 "lib/layout-cajon.js",
 "lib/layout-cajon_shadow.js",
 "lib/mi-footer.js",
 "lib/muestra-codigo.js",
 "lib/muestra-codigo_shadow.js",
 "lib/utilHtml.js",
 "lib/css/estilos.css",
 "lib/css/gentium-book-basic-v11-latin-700.woff",
 "lib/css/gentium-book-basic-v11-latin-700.woff2",
 "lib/css/gentium-book-basic-v11-latin-700italic.woff",
 "lib/css/gentium-book-basic-v11-latin-700italic.woff2",
 "lib/css/gentium-book-basic-v11-latin-italic.woff",
 "lib/css/gentium-book-basic-v11-latin-italic.woff2",
 "lib/css/gentium-book-basic-v11-latin-regular.woff",
 "lib/css/gentium-book-basic-v11-latin-regular.woff2",
 "lib/css/gentium-book-basic.css",
 "lib/css/material-icons.css",
 "lib/css/MaterialIcons-Regular.codepoints",
 "lib/css/MaterialIcons-Regular.ttf",
 "lib/css/mi-footer.css",
 "lib/css/prueba.css",
 "lib/css/ubuntu-mono-v10-latin-700.woff",
 "lib/css/ubuntu-mono-v10-latin-700.woff2",
 "lib/css/ubuntu-mono-v10-latin-700italic.woff",
 "lib/css/ubuntu-mono-v10-latin-700italic.woff2",
 "lib/css/ubuntu-mono-v10-latin-italic.woff",
 "lib/css/ubuntu-mono-v10-latin-italic.woff2",
 "lib/css/ubuntu-mono-v10-latin-regular.woff",
 "lib/css/ubuntu-mono-v10-latin-regular.woff2",
 "lib/css/ubuntu-mono.css",
 "lib/css/ubuntu-v15-latin-700.woff",
 "lib/css/ubuntu-v15-latin-700.woff2",
 "lib/css/ubuntu-v15-latin-700italic.woff",
 "lib/css/ubuntu-v15-latin-700italic.woff2",
 "lib/css/ubuntu-v15-latin-italic.woff",
 "lib/css/ubuntu-v15-latin-italic.woff2",
 "lib/css/ubuntu-v15-latin-regular.woff",
 "lib/css/ubuntu-v15-latin-regular.woff2",
 "lib/css/ubuntu.css",
 "/"
];

self.addEventListener("install", evt => {
 console.log("Service Worker instalado.");
 // @ts-ignore
 evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
 // @ts-ignore
 if (evt.request.method === "GET") {
  // @ts-ignore
  evt.respondWith(usaCache(evt));
 }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
 console.log("Intentando cargar cache: " + CACHE);
 const cache = await caches.open(CACHE);
 await cache.addAll(ARCHIVOS);
 console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
 const cache = await caches.open(CACHE);
 const response = await cache.match(evt.request, { ignoreSearch: true });
 if (response) {
  return response;
 } else {
  return fetch(evt.request);
 }
}
