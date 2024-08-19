// Get the SVG elements
var svg = document.getElementById('jacket');
var buttons = svg.getElementById('buttons');
var zipper = svg.getElementById('zipper');

// Add event listeners to the button
buttonColor.addEventListener('click', function() {
  // Toggle the visibility of the zipper
  zipper.style.display = zipper.style.display === 'none' ? 'block' : 'none';
});

// Get the SVG elements
var svg = document.getElementById('jacket');
var buttons = svg.getElementById('buttons');

// Add event listeners to the button
buttons.addEventListener('click', function() {
  // Toggle the class on the button
  buttons.classList.toggle('clicked');
});