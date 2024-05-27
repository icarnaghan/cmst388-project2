// Function to display bookmarks from local storage
const displayBookmarks = () => {

    /* PART 1: IMPLEMENT BOOKMARKS LIST
    --------------------------------------------------
    */

    // Get the bookmarks from local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    // TODO:
        // 1. Get the list element to display the bookmarks (store in a variable called bookmarksList)
        // 2. Clear the current list
        // 3. Loop through the bookmarks and create list items. Hint use li.innerHTML to set the content
        //    <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
        //    <button onclick="removeBookmark(${index})">Remove</button>
    
    bookmarks.forEach((bookmark, index) => {
        // Create list items code goes here
        bookmarksList.appendChild(li);
    });
};

// Function to add a bookmark
const addBookmark = (event) => {
    event.preventDefault();

    /* PART 2: IMPLEMENT ADD BOOKMARK TO LIST
    --------------------------------------------------
    */

    // TODO:
        // 1. Get the form values (hint: const variableName = document.getElementById ...)
        // 2. Create a bookmark object with name and url properties 
        // 3. Get the bookmarks from local storage and add the new bookmark using the array 'push' method

    // Save the bookmarks back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Clear the form
    document.getElementById('bookmarkForm').reset();

    // Display the updated list of bookmarks
    displayBookmarks();
};

// Function to remove a bookmark
const removeBookmark = (index) => {

    /* PART 3: IMPLEMENT REMOVE BOOKMARK FROM LIST
    --------------------------------------------------
    */

    // TODO:
        // 1. Get the bookmarks from local storage
        // 2. Remove the bookmark at the specified index using the array 'splice' method
        // 3. Save the updated bookmarks back to local storage

    // Display the updated list of bookmarks
    displayBookmarks();
};

// Add event listener to the form
document.getElementById('bookmarkForm').addEventListener('submit', addBookmark);

// Display the bookmarks when the page loads
document.addEventListener('DOMContentLoaded', displayBookmarks);
