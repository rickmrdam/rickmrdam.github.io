fun fns(a: UInt, b: UInt): UInt {
 return if (a == 0U) {
  println("Devuelve $b")
  b
 } else {
  println("Invoca: ${a - 1U}, $b")
  val ant = fns(a - 1U, b)
  println("Devuelve: ${ant + 1U}")
  ant + 1U
 }
}

fun main() {
 println("Invoca: 2, 3")
 println(fns(2U, 3U))
}