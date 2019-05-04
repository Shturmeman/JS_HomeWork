var letters = []

function firstLetter(str) {
    var arr = str.split(String.fromCharCode(32))
    console.log(arr)
    for (var counter = 0; counter < 4; counter++)
        var _length = letters.push(`${  arr[counter]}`.slice(0, 1))

}

firstLetter("Backend As A Service")
console.log(letters)

var joinedLetters = letters.join("")
console.log(joinedLetters)

var currentData = new Date().toLocaleString()


function secondPart(someSymbols) {

    typeof someSymbols === 'number' ? console.log(currentData) : console.log("Bla bla bla")
}


secondPart(10)