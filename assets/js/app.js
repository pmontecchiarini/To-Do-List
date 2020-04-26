//Variables
const listItems = document.getElementById('list');

//Event Listeners

eventListeners();
    
function eventListeners() {
    //Submit text area
    document.querySelector('#form').addEventListener('submit', addItem);
    //Delete list item
    list.addEventListener('click', deleteItem);
    //Load content
    document.addEventListener('DOMContentLoaded', localStorageGet);
}



//Functions

function addItem (e){
    e.preventDefault();
    const text = document.getElementById('text').value;
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-item';
    deleteButton.innerText = 'X';

    //Adding contento to list items
    const li = document.createElement('li');
    li.innerText = text;
    li.appendChild(deleteButton);
    list.appendChild(li);
    document.getElementById('text').value = ''

    //Add to local storage
    addToLocalStorage(text)   
}
    //Deleting list items
function deleteItem (e){
    e.preventDefault();
    if (e.target.className === 'delete-item'){
        e.target.parentElement.remove();
        deleteTextFromLocalStorage(e.target.parentElement.innerText);
    } 
}

//Load Local Storage saved items

function localStorageGet(){
    let items;
    items = getItemsFromLocalStorage ();
    items.forEach( text =>{
        const deleteButton = document.createElement('a');
        deleteButton.classList = 'delete-item';
        deleteButton.innerText = 'X';
    
        //Adding contento to list items
        const li = document.createElement('li');
        li.innerText = text;
        li.appendChild(deleteButton);
        list.appendChild(li);
    })
}

//Add items to local storage
function addToLocalStorage(text){
    let items;
    items =  getItemsFromLocalStorage ();
    items.push(text);
    //Saves items as an array
    localStorage.setItem('items', JSON.stringify(items))
 
}

//Checks hat items are in local storage
function getItemsFromLocalStorage () {
    let items; 
    if (localStorage.getItem('items') === null ){
        items = [];
    }else {
        items= JSON.parse(localStorage.getItem('items'));
    }
    return items

}

//Delet List Item From Local Storage
function deleteTextFromLocalStorage(text){
    let items, textDelete;
    //Delete X from Item
    textDelete = text.substring(0, text.length - 1);

    items = getItemsFromLocalStorage();
    items.forEach(function(text, index){
        if(textDelete === text){
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}
