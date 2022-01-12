fun main() {
 print(
  """Selecciona un género musical:
 1 - Pop
 2 - Reguetón
 3 - Balada
 4 - Mariachi
 5 - Cumbia
 6 - Tango
 Opción: """)
 val género = readLine()
 when (género) {
  "1" -> {
   println("Ariana Grande")
  }
  "3", "4" -> {
   println("Juan Gabriel")
  }
  "5" -> {
   println("Selena")
  }
  "2" -> {
   println("Bad Bunny")
  }
  else -> {
   println(
    "De ese género no conozco.");
  }
 }
 println("Adios.");
}