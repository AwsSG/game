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

/*  const element = document.getElementById("a");
var currentRotation = 0; // store the current rotation of the element

element.addEventListener("click", function () {
  element.classList.add("rotated-0");
  /* element.style.animation = "rotate-90-ccw 0.5s 1 forwards";  start the animation
  setTimeout(() => {
    console.log("finished")
  }, "500")
}); */

function rotateFoo() {
  var angle = ($('#a').data('angle') + 90) || 90;
  $('#a').css({ 'transform': 'rotate(' + angle + 'deg)' });
  $('#a').data('angle', angle);
}

function rotateLeft() {
  var elem = $(this).attr('id');
  console.log(elem)
  var angle = ($(this).data('angle')) || 0;
  angle -= 90;
  $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });
  $(this).data('angle', angle);
}

function rotateRight() {
  var angle = ($('#foo').data('angle')) || 0;
  angle += 90;
  $('#foo').css({ 'transform': 'rotate(' + angle + 'deg)' });
  $('#foo').data('angle', angle);
}



/*element.style.animationName = ""; // reset the animation name to its initial value
  element.style.animationDuration = ""; // reset the animation duration to its initial value
  element.style.animationIterationCount = ""; // reset the animation iteration count to its initial value
  element.style.animationFillMode = ""; // reset the animation fill mode to its initial value
  element.style.transform = `rotate(${currentRotation}deg)`; // update the rotation of the element */

/*   var st = window.getComputedStyle(element, null); // code to get computed value of rotation
  var tr = st.getPropertyValue("transform");
  var values = tr.split('(')[1],
    values = values.split(')')[0],
    values = values.split(',');

  var a = values[0]; // 0.866025
  var b = values[1]; // 0.5
  var c = values[2]; // -0.5
  var d = values[3]; // 0.866025
  var angle = Math.round(Math.asin(b) * (180 / Math.PI));
  console.log(tr)
  console.log(angle); */