document.addEventListener("DOMContentLoaded", function () {
    const bookListUl = document.getElementById("book-list-ul");
    const addBookForm = document.getElementById("add-book-form");
    const searchInput = document.getElementById("search");
    const searchResultsUl = document.getElementById("search-results-ul");

   

    addBookForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;

        if (!isDuplicate(isbn)) {
            const book = {
                title: title,
                author: author,
                isbn: isbn
            };

            bookList.push(book);
            addBookToBookList(book);
        } else {
            alert("This book already exists in the list.");
        }

        addBookForm.reset();
    });

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const searchResults = bookList.filter((book) => {
            return (
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.isbn.toLowerCase().includes(query)
            );
        });

        displaySearchResults(searchResults);
    });

    function isDuplicate(isbn) {
        return bookList.some((book) => book.isbn === isbn);
    }

    function addBookToBookList(book) {
        const li = document.createElement("li");
        li.innerHTML = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
        bookListUl.appendChild(li);
    }

    function displaySearchResults(results) {
        searchResultsUl.innerHTML = "";

        results.forEach((book) => {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
            searchResultsUl.appendChild(li);
        });
    }
});