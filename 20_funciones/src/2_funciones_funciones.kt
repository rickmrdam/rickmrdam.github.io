fun main() {
 println("main-1")
 c2()
 println("main-2")
 c1()
 println("main-3")
}

fun c1() {
 println("c1-1")
 c2()
 println("c1-2")
}

fun c2() {
 println("c2")
}