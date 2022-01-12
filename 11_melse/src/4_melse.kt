fun main() {
 print("""Recomiendo un artista.
 1 - Pop
 2 - Reguetón
 Opción: """);
 val respuesta = readLine();
 if (respuesta == "1") {
  println("Ariana Grande.")
 } else if (respuesta == "2") {
  println("Bad Bunny.")
 } else {
  println(
   "Opción incorrecta.")
 }
 println("Adios.")
}