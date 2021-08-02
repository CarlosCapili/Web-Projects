let myLibrary = [];

const titleInput = document.querySelector('#title');
const authInput = document.querySelector("#author");
const readStatus = document.querySelector("#read-status");
const addClicked = document.querySelector("#add");
const lib = document.querySelector(".book");

lib.addEventListener('click', (e) => {
  console.log(e.target);
  
  if(e.target.classList.contains("remove")){
    removeBook(e);
  }

  if(e.target.classList.contains("toggle")) {
    changeStatus(e);
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

Book.prototype.toggleStatus = function() {
  if (this.status === "Read")
    this.status = "Not Read";
  else 
    this.status = "Read";
}

function addBookToLibrary() {
  if (titleInput.value != "" && authInput.value != "") {

    const newBook = new Book(titleInput.value, authInput.value, readStatus.checked);
    myLibrary.push(newBook);

    let lastEle = myLibrary.length-1;
    const row = document.createElement('tr');

    //set index attribute to lastEle to give each book obj and tr tag a unique identifier
    row.dataset.index = lastEle;
    newBook.index = lastEle; 

    console.log("newBook.index = " +newBook.index);

    //# column
    const bookNum = document.createElement('td');
    bookNum.classList.add("bookNum");
    bookNum.textContent = lastEle+1; //starts at 1

    //title column
    const title = document.createElement('td');
    title.textContent = myLibrary[lastEle].title;
    title.classList.add("title");

    //author column
    const author = document.createElement('td');
    author.textContent = myLibrary[lastEle].author;

    //status column
    const status = document.createElement('td');
    const toggleBtn = document.createElement('button');
    if (myLibrary[lastEle].status) 
      toggleBtn.textContent = "Read";
    else 
      toggleBtn.textContent = "Not Read";

    toggleBtn.classList.add("btn");
    toggleBtn.classList.add("toggle");
    status.appendChild(toggleBtn);

    //delete button 
    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("remove");
    deleteTd.append(deleteBtn);
   
    //append row to table
    row.append(bookNum);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(status);
    row.appendChild(deleteTd);
    lib.appendChild(row);
  
    return true;
  } else {
    alert('Title and Author must be filled out!');
  }
  return false;
}

function clearInputs() {
  let form = document.querySelector('.add-container');
  form.reset();
}

function removeBook(e) {
  const index = findBook(e);
  //remove from array and page
  myLibrary.splice(index,1); 
  e.target.parentNode.parentNode.remove(); 

  //change # as books are removed from library
  let num = 1;
  const numDiv = document.querySelectorAll(".bookNum");
  numDiv.forEach(e => {
    e.textContent = num++;
  });
  
  console.log(myLibrary);
}

function changeStatus(e) {
  const index = findBook(e);
  myLibrary[index].toggleStatus();

  //Update status on page
  if (e.target.textContent == "Read") {
    e.target.textContent = "Not Read";
  } else {
    e.target.textContent = "Read";
  }
  console.log(myLibrary[index].status);
}

function findBook(e) {
  const index = e.target.parentNode.parentNode.dataset.index
  console.log(index);

    //linear search
    for (let i=0; i<myLibrary.length; i++) {
      if(myLibrary[i].index == index)
        return i; //return index of object in array 
    }
    return;
}

