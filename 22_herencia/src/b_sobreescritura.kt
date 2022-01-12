open class ClM2 {
 open fun muestra() {
  println("Hola.")
 }
}
class ClH2 : ClM2() {
 override fun muestra() {
  super.muestra()
  println("Consola.")
 }
}

fun main() {
 val tm2 = ClM2()
 tm2.muestra()
 val th2 = ClH2()
 th2.muestra()
}