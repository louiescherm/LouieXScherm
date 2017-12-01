// 1
function firstLast6(array){
    if(array[0] == 6 || array[array.length - 1]==6){
        return true;
    }else{
        return false
    }
}
//2
function has23(array){
    var numOne = array [0];
    var numTwo = array [1];
    if (numOne == 2 || numOne == 3 || numTwo == 2 || numTwo == 3){
        return true;
    }else{
        return false;
    }
}
//3
function fix23(scherm) {
    var scherm = [0, 1, 2];
    if(scherm[0] == 2 && scherm[1] == 3){
        return scherm + 0;
    }
    if(scherm[1] == 2 && scherm[2] == 3){
        return scherm + 0;
    }
}
//4
function countYZ(x){
    var word = x.toLowerCase();
    var count = 0;
    for (var i = 0; i < x.length; i++){
        if(x[i] === " "){
            if (word[i - 1] === "y" || word [i - 1] === "z"){
                count++;
            }
        }
    }
    if (word[x.length - 1] === "y" || word[x.length - 1] ==="z"){
        count++;
    }
    return count;
}
//5
function endOther (x,y){
    var x = x.toLowerCase();
    var y = y.toLowerCase();
    for (var i = 0;i < x.length; i++){
        if (x.length === y [i + 1]){
            return true;
        }

        for (var i = 0;i < y.length; i++){
            if (ward === true){
                return true;
            }
        }
        return false;
    }
}
//6
function starOut (x){
    var string = "";
    for (var i = 0; i < x.length; i++) {
        if (x [i] !== "*" && x [i + 1] !== "*" && x [i - 1] !== "*") {
            string = string + x [i];
        }
    }
    return string;
}
//7 GetSandwich
function getSando(string){
    var frontSlice = str.indexOf("bread");
    var backSlice = str.lastIndexOf("bread");
    var string = str.substring(frontSlice +5, backSlice);
        if(0 <= frontSlice){
            if(frontSlice != backSlice){
                return string;
            }
            return "";
        }
        return "";
}
//8 canBalance
function canBalance(true, false){
}
//9 countClumps
function countClumps(x) {
    var count = false;
    var clump = 0;
    for (var i = 0; i < x.length-1; i++) {
        if (x[i] === x[i+1] && !count) {
            count = true;
            clump++;
        }
        else if (x[i] !== x[i+1]) {
            count = false;
        }
    }
        return clump;
}
//10 evenlySpaced
function evenlySpaced() {
    if (a != b || b != c || a != c) {
        space = false;
    }
    if (a - b == b - c || c - b == b - a) {
        space = true;
    }
    if (a - c == c - b || b - c == c - a) {
        space = true;
    }
    if (c - a == a - b || b - a == a - c) {
        space = true;
    }
    return space;
}

function tester() {
    document.getElementById("output").innerHTML = firstLast6(true, false);
    document.getElementById("output2").innerHTML = has23(true, false);
    document.getElementById("output3").innerHTML = fix23(array);
    document.getElementById("output4").innerHTML = countYZ(x);
    document.getElementById("output5").innerHTML = endOther(true, false);
    document.getElementById("output6").innerHTML = starOut(x);
    document.getElementById("output7").innerHTML = getSando(string);
    document.getElementById("output8").innerHTML = canBalance(true, false);
    document.getElementById("output9").innerHTML = countClumps(x);
    document.getElementById("output10").innerHTML = evenlySpaced(a,b,c);
}