//Last updated: Aug 8, 2021
//Carlos Capili

let myLibrary = [];

const titleInput = document.querySelector('#title');
const authInput = document.querySelector("#author");
const readStatus = document.querySelector("#read-status");
const addClicked = document.querySelector("#add");
const bookAmt = document.querySelector("#libBook");
const lib = document.querySelector(".book");

lib.addEventListener('click', (e) => {
  console.log(e.target);
  
  if(e.target.classList.contains("remove")){
    removeBook(e);
    updateIndex();
  }
  if(e.target.classList.contains("toggle")) {
    changeStatus(e);
  }

  saveLibrary();
});

addClicked.addEventListener('click', (e) => {
  e.preventDefault(); //prevent page refresh when add btn is clicked
  addBookToLibrary();
  saveLibrary(); //saves library to local storage
  clearInputs();
});

class Book {
  constructor(title, author, status, index) {
    this.title = title;
    this.author = author;
    this.status = status; //true or false
    this.index = -1; //will be set after object is created
  }

  toggleStatus() {
    if (this.status === true)
    this.status = false;
    else 
    this.status = true;
  }
}

function addBookToLibrary() {
  let title = titleInput.value;
  let auth = authInput.value;
  let status = readStatus.checked;
  newBook(title, auth, status);
}

function newBook(title, auth, status, index) {
  if (title != "" && auth != "") {

    const newBook = new Book(title, auth, status);
    myLibrary.push(newBook);

    let lastEle = myLibrary.length-1;
    bookAmt.textContent = `${lastEle+1} books`;
    const row = document.createElement('tr');
    row.classList.add("index");
    //set index attribute to lastEle to give each book obj and tr tag a unique identifier
    row.dataset.index = lastEle;
    newBook.index = lastEle; 

    console.log("newBook.index = " +newBook.index);

    //# column
    const bookNum = document.createElement('td');
    bookNum.classList.add("bookNum");
    bookNum.textContent = lastEle+1; //starts at 1

    //title column
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[lastEle].title;
    bookTitle.classList.add("title");

    //author column
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[lastEle].author;

    //status column
    const bookStatus = document.createElement('td');
    const toggleBtn = document.createElement('button');
    if (myLibrary[lastEle].status) 
      toggleBtn.textContent = "Read";
    else 
      toggleBtn.textContent = "Not Read";

    toggleBtn.classList.add("btn");
    toggleBtn.classList.add("toggle");
    bookStatus.appendChild(toggleBtn);

    //delete button 
    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("remove");
    deleteTd.append(deleteBtn);
   
    //append row to table
    row.append(bookNum);
    row.appendChild(bookTitle);
    row.appendChild(bookAuthor);
    row.appendChild(bookStatus);
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
  bookAmt.textContent = `${myLibrary.length} books`;
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

function updateIndex() {
  const index = document.querySelectorAll(".index");
  let num = 0;
  index.forEach(e => {
    myLibrary[num].index = num; //update index in book obj
    e.dataset.index = num++; //update index in html
  });
}

function saveLibrary() {
  let books = [];

  for (let i=0; i<myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookInfo = {
      "title" : book.title,
      "author" : book.author,
      "status" : book.status,
      "index" : book.index
    };
    books.push(bookInfo);
  }
  localStorage.setItem("books", JSON.stringify(books));
}

function loadLibrary() {
  if (localStorage.getItem("books") != null) {
    let books = JSON.parse(localStorage.getItem("books"));
    for (let i=0; i<books.length; i++) {
      let book = books[i];
      
      newBook(book.title, book.author, book.status, book.index);
    }
  }
}

 loadLibrary();