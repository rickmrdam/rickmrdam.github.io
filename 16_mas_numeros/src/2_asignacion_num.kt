fun main() {
 var b: Int = 4;
 val d = 5;
 b = d * 2; // b === 10
 println(b);
 b += d; // b = b + d; b === 15
 println(b);
 b -= 2; // b = b - 2; b === 13
 println(b);
 b *= 3; // b = b * 3; b === 39
 println(b);
 b /= 3; // b = b / 3; b === 13
 println(b);
 b %= 5; // b = b % 5; b === 3
 println(b);
}