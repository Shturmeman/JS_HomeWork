var getimages = new XMLHttpRequest()
getimages.open("GET", "index.json")
let container = document.getElementById("example")
getimages.onreadystatechange = function (event) {
    if (this.readyState === 4 && this.status === 200) {
        let images = JSON.parse(this.responseText)
        images.forEach(image => {
            let every = document.createElement("img")
            every.src = image.ref
            every.title = image.title
            container.appendChild(every)
        })
    }
}
getimages.send()


var messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]

messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log[key] ? log[key + "[2]"] ? key + "[3]" : key + "[2]" : key
}

var log = {}

var sendMessage = message => new Promise(
    resolve => setTimeout(
        () => resolve(message),
        Math.random() * 7000
    )
)



messages.getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    for (let i = 2; i < Infinity; i++) {
        if (!log[key + `[${i}]`]) {
            n = i
            break
        }
    }
    return log[key] ? log[key + `[${n}]`] ? key + `[${++n}]` : key + `[${n}]` : key
}

messages.forEach(message => {
    sendMessage(message).then(() =>
        Object.defineProperty(log, messages.getKey(), {
            value: message
        }))
})
setTimeout(() => {
    console.log(log)
}, 5000);



var sendAll = () => {
    var index = 0
    function recursive() {
        sendMessage2(messages2[index++]).then(
            response => {
                if (!response) return
                Object.assign(log2,
                    { [messages2.getKey()]: response }
                )
                recursive()
            }
        )
    }
    recursive()
}

sendAll()