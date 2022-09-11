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

// moved all file names into array


window.addEventListener('load', initializer) // load event initializer

var container; // global variable for container ID in HTML

var largeImage; // global variable for large image

var i = 0; // initialize and assign value to counter

function initializer() // function to initialize the document
{
	container = document.getElementById('container');
	// identifies the thumbnail container
	largeImage = document.getElementById('main');// identifies the main image

	thumbnailCreate(); // calls function
}

var imgItem;

function thumbnailCreate() // function for adding thumbnail images
{
	imgItem = document.createElement('img'); // creates img element

	imgItem.src = imageArray[i]; // adds array image in the created, in this case it will always be array index 0

	largeImage.appendChild(imgItem); // directs JS to add img element under div id'd as container

	for(i = 0; i < 4; i++) // loops four images into the thumbnail area
	{
		imgItem = document.createElement('img'); // creates img element

		imgItem.src = imageArray[i]; // adds array image in the created img element

		imgItem.classList.add("pointer"); // adds pointer class from CSS

		container.appendChild(imgItem); // directs JS to add img element under div id'd as container

		

	}
}






var newImages = document.getElementsByTagName('img'); // targets img tags 


var mainImage = document.getElementById('main'); // declared global variable for main ID in HTML

mainImage.addEventListener("dblclick", function(){
	for (var index = 1; index < 6; index++){ // loops 4 times for 4 thumbnails, excludes the first img tag since it is the main picture
		newImages[index].src = imageArray[Math.floor(Math.random() * imageArray.length)]; 
	}
} );

/* added double-click event listener
and anonymous function on the large picture that causes thumbnails to change*/




function index(num){
	document.getElementById('main').src = click;
}

/* function above pushes the source of the
thumb-nail image that was clicked into the 
main image source */







