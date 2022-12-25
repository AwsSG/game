/* not needed now */
/* // Set the interval for image change (in milliseconds)
const interval = 100;

// Select the image element
const sprite = document.getElementById('sprite');

// Set the initial image source
let currentImage = 0;
const imageSources = [
  'assets/images/1.png',
  'assets/images/2.png',
  'assets/images/3.png',
  'assets/images/4.png',
  'assets/images/5.png'

];
sprite.src = imageSources[currentImage];

// Change the image every interval
setInterval(() => {
  // Increment the current image
  currentImage = (currentImage + 1) % imageSources.length;

  // Update the image source
  sprite.src = imageSources[currentImage];
}, interval); */

const element = document.getElementById("a");

element.addEventListener("click", function() {
  element.classList.toggle("animate");
});
