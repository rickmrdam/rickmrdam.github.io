class Cl01(val nombre: String,
  val color:String) {
 fun saluda() {
  println(
   "Hola. Soy $nombre - $color")
 }
}
fun main() {
 val tel1 = Cl01("pp", "marrón")
 val tel2 = Cl01("qk", "verde")
 tel1.saluda()
 println(tel1.nombre)
 println(tel2.nombre)
 println(tel2.color)
 println(tel1.color)
 tel2.saluda()
}