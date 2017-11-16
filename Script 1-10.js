function sleepIn(weekday, vacation){
    if (weekday & vacation){
        return true;
    }
    if (weekday){
        return false;
    }else{
        return true;
    }
}

function monkeyTrouble(a_smile, b_smile){
    if (a_smile && b_smile || (a_smile == false && b_smile==false)){
        return true;
    }else{
        return false;
    }
}

function stringTimes(string,n) {
    var solution = "";
    for (var i = 0; i < n; i++) {
        solution = solution += string;
    }
    return solution;
}

function frontTimes(string, x){
    var output = string.substring(0,3);
    var result ="";
    for(var i = 0; i < x; i++){
        result = result + output;
    }
    return result;
}
// X //
function stringBits(string) {
    var result = "";
    for (var i = 0; i < string.length; i = i + 2) {
        result = result + string[i];
    }
    return result;
}
// so "Hello" yields "Hlo".
//string_bits('Hello') → 'Hlo'
//string_bits('Hi') → 'H'
//string_bits('Heeololeo') → 'Hello'


function caughtSpeeding(speed,birthday) {
    if(birthday == true){
        speed = speed - 5;
    }
    if (speed <= 60) {
        return 0;
    }
    if (speed > 61 && speed <= 80) {
        return 1;
    }
    if (speed >= 81) {
        return 2;
    }
}




//7. fizzBuzz
//Given a number, return the string form of the number followed by "!". So the int 6 yields "6!".
// Except if the number is divisible by 3 use "Fizz" instead of the number,
// and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz".
// Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3.
large; population;     //fizzString2(1) → "1!"        fizzString2(2) → "2!"      fizzString2(3) → "Fizz!"
// X //
var int =
    function fizz_buzz(string){
        if(fizz_buzz % 3){
            return "Fizz";
        }
        if(fizz_buzz % 5){
            return "Buzz";
        }
        if(fizz_buzz % 5 && fizz_buzz % 3){
            return "FizzBuzz";
        }
        if(fizz_buzz == 143){
            return "143!";
        }
    }

//8. teaParty
function teaParty(tea,candy) {
    if(candy >= 5 && tea >= 2*candy){
        return 2;
    }
    if(tea >= 5 && candy >= 2*tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
    if (tea <= 5 || candy <= 5) {
        return 0;
    }
}

//9. blackjack
function blackjack(x,y) {
    if (x == 21 || y == 21) {
        return 21;
    }
    if (x == 20 || y == 20) {
        return 20;
    }
    if (x == 19 || y == 19) {
        return 19;
    }
    if (x > 21 || y > 21) {
        return 0;
    }
}

//10. loneSum
function loneSum(a,b,c) {
    if (a == b && b == c){
        return 0;
    }
    if (a == b) {
        return c;
    }
    if (b == c) {
        return a;
    }
    if (c == a) {
        return b;
    } else {
        return a + b + c;
    }
}

function tester() {
    document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output2").innerHTML = monkeyTrouble(true, false);
    document.getElementById("output3").innerHTML = stringTimes("word", 3);
    document.getElementById("output4").innerHTML = frontTimes("brother", 4);
    document.getElementById("output5").innerHTML = stringBits("Hullo");
    document.getElementById("output6").innerHTML = caughtSpeeding(75,true);
    document.getElementById("output7").innerHTML = fizzBuzz("FizzBuzz");
    document.getElementById("output8").innerHTML = teaParty(5,10);
    document.getElementById("output9").innerHTML = blackjack(19,19);
    document.getElementById("output10").innerHTML = loneSum(1,2,3);
}