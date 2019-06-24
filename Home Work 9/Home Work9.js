function firstex(event) {
    function typeMessage(message, velocity) {
        var container = document.getElementById("example") ?
            document.getElementById("example") :
            document.body.appendChild(
                document.createElement("h3")
            )
        container.style = `color: magenta;`
        velocity = velocity * 1000
        message.split("").forEach(letter => {
            setTimeout(() => {
                container.appendChild(document.createTextNode(letter))
            }, velocity += 1000);
        })
    }
    return typeMessage(`Welcome to the hell`, 1)
}



var users = (
    function (list) {
        var users = []
        for (var user of list)
            users.push({
                name: user,
                present: false
            })

        return {
            setUserPresent(userName, present) {
                users.find((user) => { return user.name === userName }).present = present

            },
            showPresent() {
                var normalpeople = users.filter(user => user.present != false)
                console.log("Присутствовали:")
                normalpeople.forEach(user => console.log(user.name))
            },
            showAbsent() {
                var absents = users.filter(user => user.present === false)
                console.log("Прогульщики:")
                absents.forEach(user => console.log(user.name))
            }
        }
    }
)(["Иван", "Дмитрий", "Степан", "Михаил"])

console.log("users.showAbsent()")

users.showAbsent()
console.log(" ")
users.setUserPresent("Иван", "+")
users.setUserPresent("Михаил", "присутствовал")
users.setUserPresent("Степан", true)
console.log("Отмечаем присутствие")
console.log(" ")
console.log("users.showPresent()")

users.showPresent()




function changecolor(event) {

    let changeClass = (classname, styleString) => document.getElementsByTagName("style")[0].length > 0 ?
        Array.from(document.styleSheets)
            .filter(sheet => !sheet.href)
            .map(
                sheet => Array.from(sheet.cssRules)
                    .filter(rule => rule.selectorText === `.${classname}`)
            )
            .filter(item => item.length > 0)
            .map(item => item[0].cssText.split("}")
                .join(`${styleString}}`)
            ) :
        document.head.appendChild(
            document.createElement("style")
        ).textContent = `.${classname} {${styleString}}`

    return changeClass("second-level-menu", "background-color: red!important;")

}