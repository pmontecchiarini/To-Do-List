//Variables
const listItems = document.getElementById('list');

//Event Listeners

eventListeners();
    
function eventListeners() {
    document.querySelector('#form').addEventListener('submit', addItem);

    list.addEventListener('click', deleteItem);
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
}
    //Deleting list items
function deleteItem (e){
    e.preventDefault();
    if (e.target.className === 'delete-item'){
        console.log(e.target.parentElement.remove());
    } 
}