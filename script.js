var imageArray = [
	"one.jpg",
	"two.jpg",
	"three.jpg",
	"four.jpg",
	"five.jpg",
	"six.jpg",
	"seven.jpg",
	"eight.jpg"
];



var container;
var largeImage;
var i = 0;
var imgItem;
var newImages = document.getElementsByTagName('img');
var mainImage = document.getElementById('main');
mainImage.src = imageArray[i];


// Initializes page

window.addEventListener('load', initializer);

function initializer() {
	container = document.getElementById('container');
	largeImage = document.getElementById('main');
	thumbnailCreate();
}


// creates img classes for main image and thumbnails

function thumbnailCreate() {
	imgItem = document.createElement('img');
	imgItem.src = imageArray[i];
	largeImage.appendChild(imgItem); // adds img tag inside large image div

	for (i = 0; i < 4; i++) {
		imgItem = document.createElement('img');
		imgItem.src = imageArray[i];
		imgItem.classList.add("pointer");
		container.appendChild(imgItem);
		imgItem.addEventListener('click', itemClicked); // event listener for thumbnail images
	}
}

// replaces main image with clicked thumbnail image
function itemClicked(e) {
	mainImage.src = e.target.src;
}

mainImage.addEventListener("dblclick", function() {
	for (i = 1; i < imageArray.length; i++) {
		newImages[i].src = imageArray[i + 2];
	}
});




/* I tried to use the code below within the main image event listener, but sometimes the values would repeat which
would cause some of the images to appear more than once in the thumbnail */

// for (i = 1; i < 6; i++)
// { 
// 	var randomImage = imageArray[Math.floor(Math.random() * imageArray.length)]; 
// 	console.log(randomImage);
// 	var randomItem = randomImage
// 	newImages[i].src = randomItem; 
// }