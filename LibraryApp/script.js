let myLibrary = [];

const titleInput = document.querySelector('#title');
const authInput = document.querySelector("#author");
const readStatus = document.querySelector("#read-status");
const addClicked = document.querySelector("#add");
const lib = document.querySelector(".book");

addClicked.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  clearInputs()

});

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status; //true or false
}

function addBookToLibrary() {
  if (titleInput.value != "" && authInput.value != "") {
    const newBook = new Book(titleInput.value, authInput.value, readStatus.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayBooks();
    return true;
  }
  else {
    alert('Title and Author must be filled out!');
  }
  return false;
}


function displayBooks() {
    let lastEle = myLibrary.length-1;
    const row = document.createElement('tr');

    const title = document.createElement('td');
    title.textContent = myLibrary[lastEle].title;

    const author = document.createElement('td');
    author.textContent = myLibrary[lastEle].author;

    const status = document.createElement('td');
    if (myLibrary[lastEle].status) 
      status.textContent = "Read";
    else 
      status.textContent = "Not Read";
   
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(status);

    lib.appendChild(row);

}

function clearInputs() {
  let form = document.querySelector('.add-container');
  form.reset();
}

