var anagram = function(word, string) {

    var stringArray = string.split(" ");
    var returnString = "";

    var WordLetters = word.split("");
    WordLetters.sort();
    var arrayoflettersword = [];
    stringArray.forEach(function(string1, index) {
                var stringLetters = string1.split("");
                stringLetters.sort();
                if (stringLetters.length === WordLetters.length) {
                    for (var i = 0; stringLetters.length > i; i++) {
                        if (stringLetters[i] === WordLetters[i]) {
                            arrayoflettersword.push(stringLetters[i]);

                        } else {
                            return;
                        }
                    }
            }
    });

    var joinedArray= arrayoflettersword.join("");
    console.log("Word " + joinedArray);
    return joinedArray;

}


// if( stringLetters === WordLetters){
//
//    returnString+="match";
//
// }
// else{
//     returnString+="Nope";
//
//
// }
