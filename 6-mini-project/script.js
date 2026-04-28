const addBookmark = document.getElementById('add-bookmark');
const unorderedLists = document.getElementById('bookmark-list');
const bookmarkName = document.getElementById("bookmark-name");
const bookmarkUrl = document.getElementById("bookmark-url");

let bookmarkArray = JSON.parse(localStorage.getItem('bookmarkObject')) || [];

addBookmark.addEventListener('click', () => {
    bookmarkName.value != "" && bookmarkUrl.value != "" ? newLists() : alert('Input empty');
})

let newLists = (bookmarkObject) => {
    const name = bookmarkObject ? bookmarkObject.name : bookmarkName.value;
    const url = bookmarkObject ? bookmarkObject.url : bookmarkUrl.value;

    const newList = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.href = url;
    newLink.target = "_blank"
    newLink.textContent = name;

    unorderedLists.appendChild(newList);
    newList.append(newLink, removeList(newList, name, url));

    if (!bookmarkObject) {
        const bookmark = { name: name, url: url }
        bookmarkArray.push(bookmark);
        localStorage.setItem('bookmarkObject', JSON.stringify(bookmarkArray));

        const inputText = [bookmarkName, bookmarkUrl];
        inputText.forEach((items) => { items.value = "" });
    }
}

let removeList = (newList, name, url) => {
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-bookmark");
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', () => {
        newList.remove();
        bookmarkArray = bookmarkArray.filter(b => b.name !== name || b.url !== url);
        localStorage.setItem('bookmarkObject', JSON.stringify(bookmarkArray));
    })

    return removeButton
}

bookmarkArray.forEach((bookmark) => {
    newLists(bookmark);
});