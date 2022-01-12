fun main() {
 // Menor que (<)
 println("0" < "A");   //T
 println("A" < "a");   //T
 println("a" < "b");   //T
 println("ah" < "aa"); //F
 println("ah" < "ah"); //F
 println("ah" < "ai"); //T
 // Mayor que (>)
 println("ah" > "aa"); //T
 println("ah" > "ah"); //F
 println("ah" > "ai"); //F
}