fun main() {
 val fx = { println("hola") }
 val fy =
  { f: String -> println(f) }
 val fz = { a: Int, b: Int ->
  println(a + b)
  a * b
 }
 val fw = { g: Int -> g + 1 }
 fx()
 println(fz(4, -15))
 fy("mx")
 println(fw(3))
}