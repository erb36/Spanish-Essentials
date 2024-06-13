// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // This function will be called when the DOM is ready
  console.log('app.js');
  // Immediately Invoked Function Expression (IIFE)
  // This function runs immediately after it's defined
  (function (elementId, basePath, fileNamePrefix) {
    // Target the div elementId
    let parentElement = document.getElementById(elementId);
    console.log('parentElement is' + parentElement);

    if (parentElement) {
      // Remove '-container-1' from the elementId
      let baseId = elementId.replace('-container-1', '');
      console.log('baseId is' + baseId);

      // Construct the new id by adding 'item-container' to the base id
      let newElementId = `${baseId}-item-container`;

      // target this new element
      let accordionItemContainer = document.getElementById(newElementId);

      if (accordionItemContainer) {

        // Find all divs with the class 'accordion-item' inside accordionItemContainer
        let accordionItems = accordionItemContainer.querySelectorAll('.accordion-item');

        // Log the found elements
        accordionItems.forEach((item, index) => {
          console.log('Found accordion item:', item);

          // Add click event listener to each item
          item.addEventListener('click', () => {
            console.log(`Accordion item ${index + 1} clicked`);
            // Construct the path to the corresponding audio file
            let audioFilePath = `${basePath}/${fileNamePrefix}/${index + 1}.mp3`;
            console.log('Playing audio file:', audioFilePath);

            // Create an audio object and play the audio file
            let audio = new Audio(audioFilePath);
            audio.play();
          });
        });
      } else {
        console.log('New div with id "' + newElementId + '" not found.');
      }

    } else {
      console.log('Div with id "' + elementId + '" not found.');
    }

    // Hide all elements with the class .english initially
    const englishBlocks = document.querySelectorAll('.english');
    englishBlocks.forEach(block => {
      block.classList.add('hidden');
    });

    function toggleEnglish() {
      const englishBlocks = document.querySelectorAll('.english');
      englishBlocks.forEach(block => {
        block.classList.toggle('hidden');
      });

      const toggleEnglishButton = document.querySelector('.toggle-english');
      const currentText = toggleEnglishButton.textContent;
      toggleEnglishButton.textContent = currentText === 'Hide Translation' ? 'Show Translation' : 'Hide Translation';

      // Toggle eye icon between "eye" and "eye-slash"

    }

    // Add click event listener to the toggle-english button
    const toggleEnglishButton = document.querySelector('.toggle-english');
    toggleEnglishButton.addEventListener('click', toggleEnglish);

  })('accordion-container-1', 'assets/media', 'accordion-1');

});


