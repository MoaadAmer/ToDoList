
function addEventListenerToShoppingItems() {

    let ShoppingItems = document.querySelectorAll("span");
    for (let index = 0; index < ShoppingItems.length; index++) {
        ShoppingItems[index].addEventListener('click', checkOrUncheckItem)
    }
}


function addEventListenerToDeleteButtons() {

    let deleteButtons = document.querySelectorAll('button.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteItem);
    });
}


function addEventListenerToInputButton() {

    let input = document.querySelector('#item');
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addItemToListProcess();
        }
    });
}

function addEventlistenerToAddButton() {
    let addBtn = document.querySelector('#addBtn');
    addBtn.addEventListener('click', addItemToListProcess);
}

function addItemToListProcess() {
    let input = document.querySelector('#item');
    if (isInputValid(input.value)) {
        addItemTolist(input.value);
        input.value = '';
    } else {
        alert('input is not valid')
    }

}

function addItemTolist(item) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(item));
    span.addEventListener('click', checkOrUncheckItem);
    li.appendChild(span);

    let button = document.createElement('button')
    button.appendChild(document.createTextNode('Delete'));
    button.className = 'delete';

    button.addEventListener('click', deleteItem);

    li.appendChild(button);

    let ol = document.querySelector('ol');
    ol.appendChild(li);

}

function checkOrUncheckItem(event) {
    event.currentTarget.classList.toggle('done');
}

function isInputValid(value) {
    let shoppingItems = document.querySelectorAll("span");
    if (value.length === 0) {
        return false;
    }
    for (let index = 0; index < shoppingItems.length; index++) {
        if (shoppingItems[index].textContent === value) {
            return false;
        }

    }
    return true;
};


function deleteItem(event) {
    event.currentTarget.parentElement.remove();
}


addEventListenerToShoppingItems();
addEventListenerToDeleteButtons();
addEventListenerToInputButton();
addEventlistenerToAddButton();