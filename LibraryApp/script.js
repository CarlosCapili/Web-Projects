let myLibrary = [];

const titleInput = document.querySelector('#title');
const authInput = document.querySelector("#author");
const readStatus = document.querySelector("#read-status");
const addClicked = document.querySelector("#add");
const lib = document.querySelector(".book");

lib.addEventListener('click', (e) => {
  console.log(e.target);
  
  if(e.target.classList.contains("btn")){
    removeBook(e);
  }
});

addClicked.addEventListener('click', (e) => {
  e.preventDefault(); //prevent page refresh when add btn is clicked
  addBookToLibrary();
  clearInputs()

});

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status; //true or false
  this.index = -1;
}

function addBookToLibrary() {
  if (titleInput.value != "" && authInput.value != "") {

    const newBook = new Book(titleInput.value, authInput.value, readStatus.checked);
    myLibrary.push(newBook);

    let lastEle = myLibrary.length-1;
    const row = document.createElement('tr');
    row.dataset.index = lastEle;
    //set index attribute to lastEle to give each book obj a unique identifier
    newBook.index = lastEle; 

    console.log("newBook.index = " +newBook.index);

    const title = document.createElement('td');
    title.textContent = myLibrary[lastEle].title;

    const author = document.createElement('td');
    author.textContent = myLibrary[lastEle].author;

    const status = document.createElement('td');
    if (myLibrary[lastEle].status) 
      status.textContent = "Read";
    else 
      status.textContent = "Not Read";

    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn");
    deleteTd.append(deleteBtn);
   
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(status);
    row.appendChild(deleteTd);
    lib.appendChild(row);
  
    return true;
  }
  else {
    alert('Title and Author must be filled out!');
  }
  return false;
}

function clearInputs() {
  let form = document.querySelector('.add-container');
  form.reset();
}

function removeBook(e) {
  const index = e.target.parentNode.parentNode.dataset.index
  console.log(index);

  //linear search
  for (let i=0; i<myLibrary.length; i++) {
    if(myLibrary[i].index == index)
    myLibrary.splice(i, 1); //remove book object at that index
    e.target.parentNode.parentNode.remove(); //remove from page
  }

  console.log(myLibrary);
}

