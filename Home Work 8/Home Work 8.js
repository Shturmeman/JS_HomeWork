function getclock(event) {
    document.getElementById("getclock").remove()
    var stcount = 5
    var startint = setInterval(() => {
        var clock = document.getElementById("example")
        clock.innerHTML = `Часы появятся через: ${stcount}`
        stcount -= 1
        stcount < 1 ? (() => {
            clearInterval(startint); var i = 0
            var outcount = 100
            var newintr = setInterval(() => {

                var clock = document.getElementById("example")
                var newdate = new Date()
                clock.innerHTML = `Текущее время: ${newdate.getHours() < 10 ? "0" + newdate.getHours() :
                    newdate.getHours()}:${newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes()}:
            ${newdate.getSeconds() < 10 ? "0" + newdate.getSeconds() : newdate.getSeconds()}
             Таймер будет работать: ${outcount} секунд.`
                i += 1
                outcount -= 1
                i > 100 ? clearInterval(newintr) : null;
            }, 1000);
        })() : null
    }, 1000);
}



function clicker(event) {
    document.getElementById("clicker").remove()
    var typeMessage = (function (string) {
        var container = document.getElementById("example2")
        container.style = `color: magenta;`
        var index = 0

        function letters(string) {
            var arr = string.split("")
            var inter = setInterval(() => {
                container.appendChild(document.createTextNode(arr.shift()))
                arr.length === 0 ? clearInterval(inter) : null
            }, 1000);
        }
        return function (string) {
            letters(string)
        }
    })(1)

    typeMessage(`Welcome to the hell`)
}




function User(name) {
    this.name = name
    this.id = this.counter()
}

...

var users = [
    new User("Семен"),
    new User("Антон"),
    new User("Демьян"),
    new User("Василий")
]



var sumOfUsers = 0

function User ( name ) {
  this.name = name
  this.id = this.counter(name)
}

User.prototype.counter = function (name) {
  var counter
name!=undefined ? counter = sumOfUsers+=1 : counter=this.id
return counter
}


var users = [
  new User ( "Семен" ),
  new User ( "Антон" ),
  new User ( "Демьян" ),
  new User ( "Василий" )
]