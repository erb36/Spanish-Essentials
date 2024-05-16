// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // This function will be called when the DOM is ready
  console.log('app.js');


  (function () {
    // Immediately Invoked Function Expression (IIFE)
    // This function runs immediately after it's defined

    // Target the div element with id 'aac1'
    var divElement = document.getElementById('acc-con-1-item-2');

    if (divElement) {
      // Add your logic here to work with the targeted divElement
      console.log('Found div with id "aac1":', divElement);

      // Example: Change the background color of the div
      divElement.style.backgroundColor = 'lightblue';
    } else {
      console.log('Div with id "aac1" not found.');
    }

  })();



});
