var bag = {
    name: "BACA",
    notepad: "BACA",
    kick: function (opt) {
        return delete this[opt]
    },
    add: function (opt, opt2) {
        return this[opt] = [opt2]
    }
}
console.log(bag.kick('name'))
console.log(bag)
console.log(bag.add("student", "andrey"))
console.log(bag)



var LibraryBook = function (bookTitle = "Война и мир", year = 1867, author = "Лев толстой", ) {
    var author = author
    var year = year
    var bookTitle = bookTitle
    var readerName = " "
    var readerData = " "

    giveTheBook = function (client = "Alex") {
        readerName = client;
        readerData = new Date
    }
    this.getBookInfo = function () {
        console.log(`"Книга ${readerName}, Когда: ${readerData.toLocaleString()}`)
    }

    this.getTheBook = function (cust) {
        if (readerName === " ") {
            giveTheBook(cust)
            return bookTitle
        }
        else {
            alert("Книга получена")
        }

    }
    this.returnBook = function () {
        readerName = " ",
            readerData = undefined
    }
}


var vim = new LibraryBook
vim.getTheBook("Baca")
vim.getBookInfo()



var Constructor = function () {
    Constructor.prototype.addProperty = function (nameprop, prop) {
        this[nameprop] = prop
    }
}

var newobj = new Constructor

newobj.addProperty("book", "yes")
console.log(newobj)
