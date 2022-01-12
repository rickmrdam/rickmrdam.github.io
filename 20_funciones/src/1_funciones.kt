fun main() {
 println("Main 1")
 saluda() // invoca a saluda.
 /* Al terminar la primera
  * invocación continúa aquí. */
 println("Main 2")
 saluda() // invoca a saluda.
 /* Al terminar la segunda
  * invocación continúa aquí. */
 println("Adios")
}

/* Declaración de function saluda.
 * Primero va la palabra fun.
 * Sigue el nombre de la función.
 * Siguen los paréntesis.
 * Finalmente, entre llaves ({})
 * van las instrucciones. */
fun saluda() {
 println("Hola")
}