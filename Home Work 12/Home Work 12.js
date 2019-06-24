function cookietime() {
    var cookieobj = {}
    var container = document.getElementById("example")
    function getCookies() {
        var res = document.cookie
            .split("; ")
            .map(
                x => {
                    var tmp = x.split("=")
                    var elem = {}
                    elem[tmp[0]] = tmp[1]
                    return elem
                }
            )
        return Object.assign(cookieobj, ...res)
    }
    getCookies()
    cookieobj.lastseen ?
        container.appendChild(document.createTextNode
            (`I knew you'd back ;) You were here: ${cookieobj.lastseen}`)) :
        container.appendChild(document.createTextNode
            (`Welcome!  You've never been here before! Nice to meet you ;) `))

    let nowsseen = new Date().toLocaleString()
    document.cookie = `lastseen=${nowsseen}`
}

cookietime()



var currentpage = 1
function navifunk(side) {
    if (side === "right") {
        var key = `PageId${currentpage}`
        var lasttime = JSON.parse(localStorage.getItem(key))
        localStorage.setItem([`PageId${currentpage}`],
            JSON.stringify(new Date().
                getTime()))
        document.getElementById(`section${currentpage}`).
            style.display = "none"
        currentpage === 3 ? currentpage = 0 : null
        document.getElementById(`section${++currentpage}`).
            style.display = "block"
        let timercont = document.getElementById(`timer${currentpage}`)
        if (lasttime) {
            var notonline = new Date().getTime() - lasttime
            notonline = notonline / 60000
            timercont.innerHTML =
                `Вы отсутствовали на этой странице: ${Math.round(notonline)} минут`
        }
        else {
            timercont.innerHTML = "Вы здесь впервые!"
        }
        location.hash = `section${currentpage}`
        display = top
    }
    else {
        var key = `PageId${currentpage}`
        var lasttime = JSON.parse(localStorage.getItem(key))
        localStorage.setItem([`PageId${currentpage}`],
            JSON.stringify(new Date().getTime()))
        document.getElementById(`section${currentpage}`).
            style.display = "none"
        currentpage === 1 ? currentpage = 4 : null
        document.getElementById(`section${--currentpage}`).
            style.display = "block"
        let timercont = document.getElementById(`timer${currentpage}`)
        if (lasttime) {
            var notonline = new Date().getTime() - lasttime
            notonline = notonline / 60000
            timercont.innerHTML =
                `Вы отсутствовали на этой странице: ${Math.round(notonline)} минут`
        }
        else {
            timercont.innerHTML = "Вы здесь впервые!"
        }
        location.hash = `section${currentpage}`
        display = top
    }
}




var gamediv = document.getElementById("buttons")
var startgame = document.createElement("button")
startgame.innerHTML = "Start game"
gamediv.appendChild(startgame)
startgame.onclick = function (event) {
    startgame.remove()
    var winner = Math.round(Math.random() * 2000)
    var imgcontainer = document.getElementById("gameimg")
    var img = document.createElement("img")
    img.src = "https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif"
    imgcontainer.appendChild(img)
    var gameprom = new Promise(
        resolve => resolve(img)
    ).then(img => setTimeout(() => {
        img.style.opacity = 0
    }, 4000)).then(
        () => {
            setTimeout(() => {
                img.src = "https://thumbs.gfycat.com/OddWideHookersealion-small.gif"
                img.style.opacity = 1
            }, 8000);

        }).then(
            () => {
                setTimeout(() => {
                    var request = new Request(
                        `https://api.github.com/users/${winner}`,
                        {
                            method: 'GET',
                        }
                    )
                    fetch(request).then(
                        (response) => { return response }
                    )
                        .then(response => {
                            console.log(response)
                            response.json()
                                .then(x => {
                                    img.src = x.avatar_url
                                    document.getElementById("game").appendChild(
                                        document.createTextNode(
                                            `Победитель: USER ${x.name ? x.name : x.login}`))
                                })
                        })
                }, 10000);
            }
        ).then(
            () => setTimeout(() => {
                document.getElementById("game").innerHTML = ""
                gamediv.appendChild(startgame)
            }, 18000)
        )
}