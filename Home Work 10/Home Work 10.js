var log = {}

var sendMessage = (message, callback) =>
    setTimeout(
        () => callback(message),
        Math.random() * 3000
    )
var handler = (message) => {
    getKey = () => {
        var n = 2
        var key = new Date().toLocaleString().split(", ")[1]
        for (let i = 2; i < Infinity; i++) {
            if (!log[key + `[${i}]`]) {
                n = i
                break
            }
        }
        return log[key] ? log[key + `[${n}]`] ? key + `[${++n}]` : key + `[${n}]` : key
    }
    var newkey = getKey()
    var newmes = message
    Object.defineProperty(log, newkey, { value: newmes })
}
messages.forEach(
    message => sendMessage(message, handler)
)
console.log(log)
setTimeout(() => {
    console.log(log)
}, 5000);



function User(name) {
    this.name = name
    var presence = false
    Object.defineProperty(this, "presence", {
        get: () => this.checkpresent ? `${this.checkpresent}` : `${this.name} отсутствовал`,
        set: (newpres) => {
            newpres != false ? this.checkpresent = `${this.name} присутствовал` : this.checkpresent = `${this.name} отсутствовал`
        }
    })
}

setTimeout(() => {
    console.log(" ")
    var user = new User("Ivan")
    console.log('console.info ( user.presence )')
    console.info(user.presence)
    console.log(" ")
    console.log('user.presence = "+"')
    console.log(" ")
    console.log('console.info ( user.presence )')
    user.presence = "+"
    console.info(user.presence)
}, 7000);



function User2(name, age, sex, mail) {
    this.name = name || "Alex"
    this.age = age || "23"
    this.sex = sex || "male"
    this.mail = mail || "alex@lexa.com"
    this.photoURL = User2.getAvatar()
}
Object.defineProperties(User2, {
    avatars: {
        value: [
            "https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgvd6sbqn-EyQpfa5kua32_sgBj1-9_xAv8gJMWkRW-EYEdMc",
            "http://grodno.greenbelarus.info/files/fraj.jpg",
            "http://www.youloveit.ru/uploads/posts/2012-12/1355411110_how-to-draw-christmas-pikachu-tutorial-drawing.png",
            "https://apollo-ireland.akamaized.net/v1/files/5bucx1wiqmes-UA/image;s=644x461",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuajfcl7N912f1pYRn0EMDDQAIrCEluHAFi9wrWPs_KjdsYtxZ",
            "http://www.youloveit.ru/uploads/posts/2012-12/1355411110_how-to-draw-christmas-pikachu-tutorial-drawing.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdq_BAy5mm7tdEVbmqW5QjJE_60_mDbVIczcnTFiRxPcdEG-FY"
        ]
    },
    admin: {
        value: {
            photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
            name: "admin",
            write: function (message) {
                User2.prototype.write.call(User2.admin, message)
            },
            messageBox: function () {
                return User2.prototype.messageBox()
            }
        },

    },
    getAvatar: {
        value: function () {
            return this.avatars.shift()
        }
    }
})

Object.defineProperties(User2.prototype, {
    messageBox: {
        enumerable: false,
        writable: false,
        value: function () {
            return document.getElementById("example")
        }
    },
    write: {
        value: function (message) {
            let newmes = document.createElement("div")
            newmes.className = "message"
            this.name === "admin" ? newmes.style.background = "red" : null
            let info = document.createElement("div")
            info.className = "userinfo"
            let avatar = document.createElement("img")
            avatar.src = this.photoURL
            info.appendChild(document.createTextNode(this.name))
            info.appendChild(avatar)
            let usertext = document.createElement("div")
            usertext.className = "usertext"
            usertext.appendChild(document.createTextNode(`Написал в ${new Date().toLocaleTimeString()}`))
            newmes.appendChild(info)
            newmes.appendChild(usertext)
            let area = document.createElement("div")
            area.className = "area"
            area.appendChild(document.createTextNode(message))
            usertext.appendChild(area)
            let box = this.messageBox()
            box.insertBefore(newmes, box.firstChild)
        }
    }
})

function startchat(event) {
    var users = [
        new User2("Иван"),
        new User2('Alex', "alex@gmail.com"),
        new User2('Bob', "bob777@gmail.com"),
        new User2('Dima', "dima888@gmail.com"),
        new User2('Fima', "fima999@gmail.com")
    ]
    var k = 1
    users.forEach(
        function (user) {
            setTimeout(
                function () {
                    user.write(`Hello, I'm ${user.name}`)
                }, 3000 * k++
            )
        }
    )
}

function sendadminmes(event) {
    User2.admin.write(document.getElementById("admintext").value)
    document.getElementById("admintext").value = ""

}