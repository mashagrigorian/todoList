const addButton = document.getElementById("add-button");
const addFormInput = document.getElementById("add-form-input");
const ulList = document.querySelector("#book-list > ul");
const hideBox = document.getElementById("hide");
const searchInput = document.getElementById("searchBar");


// Add book 

const handleAddBook = () => {
    const { value } = addFormInput;
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

    addFormInput.value = "";
}    
}

addButton.addEventListener("click", handleAddBook)


// Delete books

const handleDeleteBook = event => {
    const { target } = event;
    if(target.className === 'delete') {
        const li = target.parentElement;
        ulList.removeChild(li);
    }
}

ulList.addEventListener("click", handleDeleteBook);

// Hide books

const handleHideBooks = event => {
    const { target } = event;
    ulList.style.display = target.checked ? "none" : "block";
}

hideBox.addEventListener("input", handleHideBooks);

// Search bar

const handleSearch = () => {
    const searchInput = document.getElementById("searchBar"); // get search bar element
    const namesFromDOM = document.getElementsByTagName("li"); // store name elements in array-like object

    searchInput.addEventListener("keyup", (event) => {
        const { value } = event.target;
        const searchQuery = value.toLowerCase();

        for (const nameElement of namesFromDOM) {
            let name = nameElement.textContent.toLowerCase(); // store name text and convert to lowercase
            
            if (name.includes(searchQuery)) { // compare current name to search input
                nameElement.style.display = "block"; // found name matching search, display it
                } else {
                    nameElement.style.display = "none"; // no match, don't display name
            }
        }
    });
}

searchInput.addEventListener("keyup", handleSearch);