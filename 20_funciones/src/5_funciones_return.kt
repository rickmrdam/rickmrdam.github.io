fun main() {
 val x = fna(8, 5)
 println(fna(4, 1))
 println(x)
}

fun fna(t: Int, bc: Int): Int {
 println(t + bc * 2)
 return 1 + t * 8
}