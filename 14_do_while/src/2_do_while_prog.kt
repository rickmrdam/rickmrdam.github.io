fun main() {
 var respuesta: String?
 do {
  print(
   """Selecciona un género musical
 1 - Pop
 2 - Reguetón
 Opción: """)
  respuesta = readLine()
 } while (respuesta != "1"
  && respuesta != "2")
 println("Adios.")
}