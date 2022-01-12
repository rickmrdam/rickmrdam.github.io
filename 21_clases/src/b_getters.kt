class ClX {
 var nombre = ""
  get() = field
  set (nombre) {
   field = nombre
  }
  val juega
   get() = "${this.nombre} juega"
}

fun main() {
 val tt1 = ClX()
 tt1.nombre = "pp"
 println(tt1.nombre)
 println(tt1.juega)
}