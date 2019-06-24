function pclick(event) {
    var firstdiv = document.getElementById("example")

    var canna = document.createElement("img")
    canna.setAttribute("src", "img/1.jpg")
    canna.setAttribute("width", "100")
    canna.setAttribute("style", "transition: all 1s ease")
    firstdiv.appendChild(canna)
    canna.onmouseover = function (event) {
        canna.setAttribute("width", "200")
    }
    canna.onclick = function (event) {
        firstdiv.removeChild(canna)
    }
}





function over(event) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out(event) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler(event) {
    event.target.remove()
}

function clicker(event) {
    var collection = []
    var divnames = ["first", "second", "third", "fourth"]
    var seconddiv = document.getElementById("example2")
    for (var item of divnames) {
        var elem = document.createElement('div');
        elem.style = `
                display: flex;
                justify-content: center;
                align-items: center;
                width:${400 - 50 * collection.length}px;
                height:${400 - 50 * collection.length}px;
                background-color: #ff00ff50;
                border: dotted 2px orangered;
                border-radius: 50%;
            `;
        (collection.length == 0 ? seconddiv : collection[collection.length - 1]).appendChild(elem);
        collection.push(elem);
        elem.title = item;
        elem.onmouseover = over;
        elem.onmouseout = out;
        elem.onclick = clickHandler;
    }
}


var collection = []

function enter(event) {
          ...
}
function leave(event) {
          ...
}
function clickHandler(event) {
          ...
}

[1, 2, 3, 4, 5, 6, 7].forEach(
    ...
      )
