var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function addEventListenerTolis() {
    lis = ul.querySelectorAll("li");
    lis.forEach(li => {
        li.addEventListener("click", function () {
            li.classList.toggle("done");
        });

    })
}

function addEventListenerToDelButton() {
    lis = ul.querySelectorAll("li");
    lis.forEach(li => {
        li.querySelector("button").addEventListener("click", function () {
            li.remove();
        });

    })
}

function inputLength() {
    return input.value.length;
}

function createListElem() {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerText = "Delete";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";

    addEventListenerTolis();
    addEventListenerToDelButton();

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElem();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElem();
    }
}

input.addEventListener("keydown", addListAfterKeyPress);
button.addEventListener("click", addListAfterClick);



addEventListenerTolis();

addEventListenerToDelButton();