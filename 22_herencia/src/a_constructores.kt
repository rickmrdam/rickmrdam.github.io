open class ClM1(val m: Int) { }
class ClH1 (b: Int, val h: Int) :
 ClM1(b) {}

fun main() {
 val th1 = ClH1(4, -2)
 println(th1.m)
 println(th1.h)
 val tm1 = ClM1(8)
 println(tm1.m)
}