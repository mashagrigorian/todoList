const addButton = document.getElementById("add-button");
const addFormInput = document.getElementById("add-form-input");
const ulList = document.querySelector("#book-list > ul");
const hideBox = document.getElementById("hide");
const searchInput = document.getElementById("searchBar");

const handleAddBook = () => {
    const {value} = addFormInput;
    if(value.trim()) {
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteButton = document.createElement("span");

    bookName.innerText = value;
    deleteButton.innerText = "delete";

    bookName.classList.add("name");
    deleteButton.classList.add("delete");
    li.appendChild(bookName);
    li.appendChild(deleteButton);
    ulList.appendChild(li)

    addFormInput.value = ""
    }
    
}

addButton.addEventListener("click", handleAddBook)
