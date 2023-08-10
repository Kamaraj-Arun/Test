document.addEventListener("DOMContentLoaded", function () {
    const bookItems = document.querySelectorAll(".book-item");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupCover = document.getElementById("popupCover");
    const popupTitle = document.getElementById("popupTitle");
    const popupAuthor = document.getElementById("popupAuthor");
    const popupDescription = document.getElementById("popupDescription");
    const popupLink = document.getElementById("popupLink");

    
    bookItems.forEach(bookItem => {
        bookItem.addEventListener("click", function () {
            const title = bookItem.querySelector("h3").textContent;
            const author = bookItem.querySelector("p:nth-of-type(1)").textContent;
            const description = bookItem.querySelector("p:nth-of-type(2)").textContent;
            const coverSrc = bookItem.querySelector("img").src;

            popupCover.src = coverSrc;
            popupTitle.textContent = title;
            popupAuthor.textContent = author;
            popupDescription.textContent = description;
            popupLink.href = "#";

            popup.style.display = "block";
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
