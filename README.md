# Test
Assessment
<a name="br1"></a> 

Copy the code below and paste it into the code editor. And Please follow the

ﬁle naming as such as below.

index.html ﬁle

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="style.css">

<title>Book List</title>

</head>

<body>

<header>

<div class="logo">Logo</div>

<nav>

<ul>

<li><a href="#">Home</a></li>

<li><a href="#">Books</a></li>

<li><a href="#">About</a></li>

<li><a href="#">Contact</a></li>

</ul>

</nav>

</header>

<main>

<div class="book-grid">

<div class="book-item">

<div class="book-cover">

<img src="" alt="Book Logo">

</div>

<div class="book-details">

<h3>"Life Divine"</h3>

<p class="author">by Sri Aurbindo Ghosh</p>

<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

tempor incididunt ut

labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

exercitation ullamco

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

reprehenderit in

voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

occaecat cupidatat

non proident, sunt in culpa qui ofﬁcia deserunt mollit anim id est laborum."</

p>

</div>

<div class="btn-main">

<button class="btn">Read More!</button>

<button class="btn">Buy now!</button>

</div>



<a name="br2"></a> 

</div>

<div class="book-item">

<div class="book-cover">

<img src="" alt="Book Logo">

</div>

<div class="book-details">

<h3>"Listen to Your Heart: The London Adventure"</h3>

<p class="author">by Ruskin Bond</p>

<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

tempor incididunt ut

labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

exercitation ullamco

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

reprehenderit in

voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

occaecat cupidatat

non proident, sunt in culpa qui ofﬁcia deserunt mollit anim id est laborum."</

p>

</div>

<div class="btn-main">

<button class="btn">Read More!</button>

<button class="btn">Buy now!</button>

</div>

</div>

<div class="book-item">

<div class="book-cover">

<img src="" alt="Book Logo">

</div>

<div class="book-details">

<h3>"Business of Sports: The Winning Formula for Success"</h3>

<p class="author">by Vinit Karnik</p>

<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

tempor incididunt ut

labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

exercitation ullamco

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

reprehenderit in

voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

occaecat cupidatat

non proident, sunt in culpa qui ofﬁcia deserunt mollit anim id est laborum."</

p>

</div>

<div class="btn-main">

<button class="btn">Read More!</button>

<button class="btn">Buy now!</button>

</div>

</div>

<div class="book-item">

<div class="book-cover">

<img src="" alt="Book Logo">

</div>

<div class="book-details">



<a name="br3"></a> 

<h3>"A Place Called Home"</h3>

<p class="author">by Preeti Shenoy</p>

<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

tempor incididunt ut

labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud

exercitation ullamco

laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in

reprehenderit in

voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint

occaecat cupidatat

non proident, sunt in culpa qui ofﬁcia deserunt mollit anim id est laborum."</

p>

</div>

<div class="btn-main">

<button class="btn">Read More!</button>

<button class="btn">Buy now!</button>

</div>

</div>

</div>

</main>

<div class="book-popup" id="popup">

<div class="popup-content">

<span class="close-popup" id="closePopup">&times;</span>

<div class="popup-details">

<img src="" alt="Book Cover" id="popupCover">

<h3 id="popupTitle"></h3>

<p id="popupAuthor"></p>

<p id="popupDescription"></p>

<a href="#" id="popupLink" class="popup-btn">Order Now!</a>

</div>

</div>

</div>

<script src="script.js"></script>

</body>

</html>

———————————————————————————————————————

style.css

body,

h1,

h2,

h3,

p,

ul,

li {

margin: 0;

padding: 0;

}



<a name="br4"></a> 

p {

}

color: #5F9EA0;

font-weight: lighter;

.author {

color: #333;

font-weight: bold;

}

header {

background-color: #333;

color: white;

display: ﬂex;

justify-content: space-between;

align-items: center;

padding: 10px 20px;

}

nav ul {

list-style: none;

display: ﬂex;

}

nav a {

text-decoration: none;

color: white;

margin: 0 10px;

}

main {

padding: 20px;

}

.book-grid {

display: grid;

grid-template-columns: repeat(auto-ﬁt, minmax(300px, 1fr));

gap: 20px;

}

.book-item {

border: 1px solid #ddd;

padding: 10px;

transition: transform 0.2s;

}

.book-item:hover {

transform: scale(1.05);

}

.book-popup {



<a name="br5"></a> 

display: none;

position: ﬁxed;

top: 0;

left: 0;

width: 100%;

height: 100%;

background-color: rgba(0, 0, 0, 0.7);

z-index: 999;

}

.btn-main {

padding: 5%;

display: ﬂex;

justify-content: center;

align-items: center;

}

.btn {

margin: 5%;

}

.popup-content {

background-color: white;

max-width: 600px;

margin: 0 auto;

padding: 20px;

border-radius: 5px;

box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

}

.close-popup {

position: absolute;

top: 10px;

right: 15px;

font-size: 24px;

cursor: pointer;

}

.popup-btn {

background-color: #555555;

padding: 2px 10px;

color: white;

}

———————————————————————————————————————

script.js

document.addEventListener("DOMContentLoaded", function () {

const bookItems = document.querySelectorAll(".book-item");

const popup = document.getElementById("popup");



<a name="br6"></a> 

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

————————————————————————————————————————

