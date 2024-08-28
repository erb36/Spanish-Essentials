// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // This function will be called when the DOM is ready
  //console.log('app.js');

  // PATH TO mp3 audio assests
  const AUDIO_PATH = 'assets/media';

  // SVG icons for eye open and eye slash
  const EYE_OPEN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="eye-icon">
      <path fill-rule="evenodd"
        d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
        clip-rule="evenodd" />
    </svg>`;

  const EYE_SLASH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="eye-slash-icon">
      <path fill-rule="evenodd"
        d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"
        clip-rule="evenodd" />
    </svg>`;

  // SVG icons for correct and incorrect answers
  const CIRCLE_XMARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="eye-slash-icon">
    <path fill-rule="evenodd"
      d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
      clip-rule="evenodd" />
    </svg>`;

  const CIRCLE_CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="eye-slash-icon">
    <path fill-rule="evenodd"
      d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
    </svg>`;

  // SVG icon for dropdown audio answer
  const DROPDOWN_AUDIO_SVG = `<svg class="feedback-play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226.1">
                      <path class="play-icon-cls-2" d="M226.2,118.8c0-29.8-10.5-55.2-31.6-76.2-21-21-46.4-31.6-76.2-31.6-29.8,0-55.2,10.5-76.3,31.6-21,21.1-31.6,46.5-31.6,76.2,0,29.8,10.5,55.2,31.6,76.2,21.1,21.1,46.5,31.6,76.3,31.6s55.2-10.5,76.2-31.6c21.1-21,31.6-46.4,31.6-76.2m-43.3-12.1h0c.9.5,1.8,1,2.6,1.6.4.3.8.7,1.2,1.1,2.6,2.6,4,5.7,4,9.4s-1.3,6.8-4,9.4c-.4.4-.8.8-1.2,1.1-.8.6-1.6,1.2-2.6,1.6l-85.1,53.8c-.5.3-1,.6-1.5,1-1.9,1-3.9,1.5-6.2,1.5-3.7,0-6.8-1.3-9.4-4-2.5-2.5-3.8-5.5-3.9-9V63.5c0-3.5,1.4-6.6,3.9-9.1,2.6-2.6,5.7-3.9,9.4-3.9s4.5.5,6.4,1.5c.5.2.9.5,1.4.9l85.1,53.8Z"/>
                      <path class="play-icon-cls-3" d="M183,106.7h0l-85.1-53.8c-.5-.4-.9-.7-1.4-.9-1.9-1-4-1.5-6.4-1.5-3.7,0-6.8,1.3-9.4,3.9-2.5,2.5-3.8,5.6-3.9,9.1v110.7c0,3.5,1.4,6.5,3.9,9,2.6,2.6,5.7,4,9.4,4s4.3-.5,6.2-1.5c.5-.3,1-.6,1.5-1l85.1-53.8c.9-.5,1.8-1,2.6-1.6.4-.3.8-.7,1.2-1.1,2.6-2.6,4-5.7,4-9.4s-1.3-6.8-4-9.4c-.4-.4-.8-.8-1.2-1.2-.7-.5-1.5-1-2.2-1.4h-.2Z"/>
                      <path class="play-icon-cls-1" d="M226.3,118.8v-.5H10.7v.5c0,29.8,10.5,55.2,31.5,76.2s46.5,31.6,76.2,31.6,55.2-10.5,76.2-31.6c21.1-21,31.6-46.4,31.6-76.2Z"/>
                    </svg>`;



  let currentAudio = null;

  // Immediately Invoked Function Expression (IIFE)
  // This function runs immediately after it's defined
  function setupAccordion(elementId) {
    // Target the div elementId
    let parentElement = document.getElementById(elementId);
    if (!parentElement) {
      console.log(`Div with id "${elementId}" not found.`);
      return;
    }

    //accordion-container-1
    console.log('====parentElement=====' + parentElement.id);

    let temp = elementId.split('-');
    // Assuming temp is ['accordion', 'container', '1']
    let firstElement = temp[0]; // First element: 'accordion'
    let lastElement = temp[temp.length - 1]; // Last element: '1'
    // Joining the first element and the last number with a dash
    let fileNamePrefix = `${firstElement}-${lastElement}`;


    console.log('=====fileNamePrefix is: ' + fileNamePrefix);


    // Remove '-container' from the elementId
    let containerId = elementId.replace('-container', '');
    console.log('containerId is: ' + containerId);

    // Construct the new id by adding 'item-container' to the base id
    let newElementId = `${containerId}-item-container`;
    console.log('newElementId is: ' + newElementId);

    // target this new element
    let accordionItemContainer = document.getElementById(newElementId);
    console.log('accordionItemContainer is: ' + accordionItemContainer.id);
    if (!accordionItemContainer) {
      console.log(`New div with id "${newElementId}" not found.`);
      return;
    }

    // Find all divs with the class 'accordion-item' inside accordionItemContainer
    let accordionItems = accordionItemContainer.querySelectorAll('.accordion-item');

    // Count the number of accordion items
    let numberOfAccordionItems = accordionItems.length;
    console.log(`Number of accordion items: ${numberOfAccordionItems}`);

    accordionItems.forEach((item, index) => {
      // Log the found elements
      console.log('Found accordion item:', item);

      // Add click event listener to each item
      item.addEventListener('click', () => {
        console.log(`Accordion item ${index + 1} clicked`);
        // Construct the path to the corresponding audio file
        let audioFilePath = `${AUDIO_PATH}/${fileNamePrefix}/${index + 1}.mp3`;
        console.log('Playing audio file:', audioFilePath);

        // Check if there is currently playing audio
        if (currentAudio) {
          // Pause the currently playing audio
          currentAudio.pause();
        }

        // Create an audio object and play the audio file
        let audio = new Audio(audioFilePath);
        audio.play();
      });
    });

    // Hide all elements with the class .english inside the accordion
    const englishBlocks = accordionItemContainer.querySelectorAll('.english');
    console.log('englishBlocks are:', englishBlocks);
    englishBlocks.forEach(block => {
      block.classList.add('hidden');
    });

    // Function to toggle the SVG icon and text
    function toggleEnglish() {
      // Toggle the 'hidden' class on all elements with the class 'english'
      englishBlocks.forEach(block => {
        block.classList.toggle('hidden');
      });

      // Find the toggle-english button inside the parentElement
      console.log("---parentElement is: " + parentElement.id)
      const toggleEnglishButton = parentElement.querySelector('.toggle-english');


      // Get the current text content of the toggle-english button and trim any whitespace
      const currentText = toggleEnglishButton.textContent.trim();

      // Determine the new text content and SVG based on the current text
      const newTextContent = currentText === 'Hide Translation' ? 'Show Translation' : 'Hide Translation';
      const newEyeIconSVG = currentText === 'Hide Translation' ? EYE_OPEN_SVG : EYE_SLASH_SVG;

      // Update the button's innerHTML with the new content
      toggleEnglishButton.innerHTML = `${newEyeIconSVG} ${newTextContent}`;
    }

    // Add click event listener to the toggle-english button
    const toggleEnglishButton = parentElement.querySelector('.toggle-english');
    if (toggleEnglishButton) {
      toggleEnglishButton.addEventListener('click', toggleEnglish);
    } else {
      console.log('Toggle English button not found.');
    }
  }


  // New IIFE function to handle binary choice questions
  function setupBinaryChoice(container, quizFeedback) {
    const questionContainer = document.querySelector(`#${container}`);
    if (!questionContainer) {
      console.log(`Container with class "${container}" not found.`);
      return;
    }

    const questions = questionContainer.querySelectorAll('.question-js');

    questions.forEach((question, index) => {
      console.log(`Setting up question ${index + 1}`);

      const buttons = question.querySelectorAll('button');


      buttons.forEach((button) => {
        button.addEventListener('click', function () {
          const isCorrect = button.getAttribute('data-answer') === 'correct';

          // Handle feedback display based on the answer
          const feedbackIcon = question.querySelector('.feedback-icon-js');
          const feedbackMessage = question.querySelector('.feedback-message-js');

          // Access feedback using index + 1 to align with 1-based keys
          const feedbackIndex = index + 1;

          if (isCorrect) {
            if (feedbackIcon) {
              feedbackIcon.innerHTML = CIRCLE_CHECK_SVG; // Display the checkmark icon
              feedbackIcon.classList.remove('hidden'); // Add green text color
              feedbackIcon.classList.remove('text-red-700'); // Remove red text color if present
              feedbackIcon.classList.add('text-green-700');
            }
            if (feedbackMessage) {
              feedbackMessage.textContent = quizFeedback[feedbackIndex].correct; // Display "Correct" feedback message
              feedbackMessage.classList.remove('hidden');
              feedbackMessage.classList.add('bg-green-100'); // Add light green background
              feedbackMessage.classList.remove('bg-red-100'); // Remove light red background if present
              feedbackMessage.classList.add('text-green-700'); // Add green text color
              feedbackMessage.classList.remove('text-red-700'); // Remove red text color if present
            }
          } else {
            if (feedbackIcon) {
              feedbackIcon.innerHTML = CIRCLE_XMARK_SVG; // Display the x-mark icon
              feedbackIcon.classList.remove('hidden');
              feedbackIcon.classList.remove('text-green-700');
              feedbackIcon.classList.add('text-red-700');
            }
            if (feedbackMessage) {
              feedbackMessage.textContent = quizFeedback[feedbackIndex].incorrect; // Display "Incorrect" message
              feedbackMessage.classList.remove('hidden');
              feedbackMessage.classList.add('bg-red-100'); // Add light red background
              feedbackMessage.classList.remove('bg-green-100'); // Remove light green background if present
              feedbackMessage.classList.add('text-red-700'); // Add red text color
              feedbackMessage.classList.remove('text-green-700'); // Remove green text color if present
            }
          }

          //buttons.forEach((btn) => btn.setAttribute('disabled', true));
        });
      });
    });

    // Function to reset the quiz
    function resetQuiz() {
      // Loop through each question and reset it
      questions.forEach((question) => {
        // Hide the feedback
        const feedbackIcon = question.querySelector('.feedback-icon-js');
        const feedbackMessage = question.querySelector('.feedback-message-js');
        if (feedbackIcon) {
          feedbackIcon.innerHTML = ''; // Remove the SVG icons
          feedbackIcon.classList.add('hidden'); // Hide the icon
          feedbackIcon.classList.remove('text-green-500', 'text-red-500'); // Remove color classes
        }
        if (feedbackMessage) {
          feedbackMessage.textContent = ''; // Clear the message
          feedbackMessage.classList.add('hidden'); // Hide the message
          feedbackMessage.classList.remove('bg-green-100', 'bg-red-100', 'text-green-700', 'text-red-700'); // Remove background and text color classes
        }

        // Enable the buttons
        const buttons = question.querySelectorAll('button');
        // buttons.forEach((button) => {
        //   button.removeAttribute('disabled'); // Enable the button
        // });
      });
    }

    // Attach resetQuiz function to the reset button
    const resetButton = questionContainer.querySelector('.reset-quiz-btn');
    if (resetButton) {
      resetButton.addEventListener('click', resetQuiz);
    } else {
      console.log('Reset button not found.');
    }
  }
  // ed test
  function setupDropdownChoice(container, quizFeedback) {
    const questionContainer = document.querySelector(`#${container}`);
    if (!questionContainer) {
      console.log(`Container with class "${container}" not found.`);
      return;
    }

    const questions = questionContainer.querySelectorAll('.question-js');
    questions.forEach((question, index) => {
      console.log(`Setting up question ${index + 1}`);

      const dropdowns = question.querySelector('select');

      dropdowns.addEventListener('change', function () {
        const selectedOption = dropdowns.options[dropdowns.selectedIndex];
        const isCorrect = selectedOption.getAttribute('value') === 'correct';
        console.log(isCorrect);


        // Handle feedback display based on the answer
        const feedbackIcon = question.querySelector('.feedback-icon-js');
        const feedbackMessage = question.querySelector('.feedback-message-js');

        // Access feedback using index + 1 to align with 1-based keys
        const feedbackIndex = index + 1;

        if (isCorrect) {
          if (feedbackIcon) {
            feedbackIcon.innerHTML = CIRCLE_CHECK_SVG; // Display the checkmark icon
            feedbackIcon.classList.remove('hidden'); // Add green text color
            feedbackIcon.classList.remove('text-red-700'); // Remove red text color if present
            feedbackIcon.classList.add('text-green-700');
          }
          if (feedbackMessage) {
            feedbackMessage.innerHTML = DROPDOWN_AUDIO_SVG + quizFeedback[feedbackIndex].correct;

            // feedbackMessage.innerHTML = DROPDOWN_AUDIO_SVG;
            // feedbackMessage.textContent = quizFeedback[feedbackIndex].correct; // Display "Correct" feedback message
            feedbackMessage.classList.remove('hidden');
            feedbackMessage.classList.add('bg-green-100'); // Add light green background
            feedbackMessage.classList.remove('bg-red-100'); // Remove light red background if present
            feedbackMessage.classList.add('text-green-700'); // Add green text color
            feedbackMessage.classList.remove('text-red-700'); // Remove red text color if present
          }
        } else {
          if (feedbackIcon) {
            feedbackIcon.innerHTML = CIRCLE_XMARK_SVG; // Display the x-mark icon
            feedbackIcon.classList.remove('hidden');
            feedbackIcon.classList.remove('text-green-700');
            feedbackIcon.classList.add('text-red-700');
          }
          if (feedbackMessage) {
            feedbackMessage.textContent = quizFeedback[feedbackIndex].incorrect; // Display "Incorrect" message
            feedbackMessage.classList.remove('hidden');
            feedbackMessage.classList.add('bg-red-100'); // Add light red background
            feedbackMessage.classList.remove('bg-green-100'); // Remove light green background if present
            feedbackMessage.classList.add('text-red-700'); // Add red text color
            feedbackMessage.classList.remove('text-green-700'); // Remove green text color if present
          }
        }

        //buttons.forEach((btn) => btn.setAttribute('disabled', true));
      });

    });

    // Function to reset the quiz
    function resetQuiz() {
      // Loop through each question and reset it
      questions.forEach((question) => {
        // Hide the feedback
        const feedbackIcon = question.querySelector('.feedback-icon-js');
        const feedbackMessage = question.querySelector('.feedback-message-js');
        if (feedbackIcon) {
          feedbackIcon.innerHTML = ''; // Remove the SVG icons
          feedbackIcon.classList.add('hidden'); // Hide the icon
          feedbackIcon.classList.remove('text-green-500', 'text-red-500'); // Remove color classes
        }
        if (feedbackMessage) {
          feedbackMessage.textContent = ''; // Clear the message
          feedbackMessage.classList.add('hidden'); // Hide the message
          feedbackMessage.classList.remove('bg-green-100', 'bg-red-100', 'text-green-700', 'text-red-700'); // Remove background and text color classes
        }

        // Reset the dropdown to the default "Select the correct answer"
        const dropdown = question.querySelector('select');
        if (dropdown) {
          dropdown.selectedIndex = 0; // Reset the dropdown to the first option
        }

        // Enable the buttons
        const dropdowns = question.querySelectorAll('option');
        // buttons.forEach((button) => {
        //   button.removeAttribute('disabled'); // Enable the button
        // });
      });
    }

    // Attach resetQuiz function to the reset button
    const resetButton = questionContainer.querySelector('.reset-quiz-btn');
    if (resetButton) {
      resetButton.addEventListener('click', resetQuiz);
    } else {
      console.log('Reset button not found.');
    }
  }






  // Call the function for each accordion container
  setupAccordion('accordion-container-1');
  setupAccordion('accordion-container-2');
  setupAccordion('accordion-container-3');
  setupAccordion('accordion-container-4');
  setupAccordion('accordion-container-5');
  setupAccordion('accordion-container-6');




  const exercise_greeting_or_goodbye_feedback = {
    1: {
      correct: '"Buen día" is a greeting in Spanish. It is used to wish someone a good day...',
      incorrect: '"Buen día" in some contexts could be used when parting ways, but its primary function is as a greeting.'
    },
    2: {
      correct: '"Buenas tardes" can be used both as a greeting and as a goodbye in Spanish...',
      incorrect: '"Buenas tardes" can sometimes be used when parting ways in the afternoon...'
    },
    3: {
      correct: 'Correct feedback for question 3',
      incorrect: 'Incorrect feedback for question 3'
    },
    4: {
      correct: 'Correct feedback for question 4',
      incorrect: 'Incorrect feedback for question 4'
    },
    5: {
      correct: 'Correct feedback for question 5',
      incorrect: 'Incorrect feedback for question 5'
    },
    6: {
      correct: 'Correct feedback for question 6',
      incorrect: 'Incorrect feedback for question 6'
    },
    7: {
      correct: 'Correct feedback for question 7',
      incorrect: 'Incorrect feedback for question 7'
    },
    8: {
      correct: 'Correct feedback for question 8',
      incorrect: 'Incorrect feedback for question 8'
    },
    9: {
      correct: 'Correct feedback for question 9',
      incorrect: 'Incorrect feedback for question 9'
    }
    // Add more questions as needed
  };

  const exercise_formal_or_informal_feedback = {
    1: {
      correct: 'Correct feedback for question 1',
      incorrect: 'Incorrect feedback for question 1',
    },
    2: {
      correct: 'Correct feedback for question 2',
      incorrect: 'Incorrect feedback for question 2',
    },
    3: {
      correct: 'Correct feedback for question 3',
      incorrect: 'Incorrect feedback for question 3',
    },
    4: {
      correct: 'Correct feedback for question 4',
      incorrect: 'Incorrect feedback for question 4',
    },
    5: {
      correct: 'Correct feedback for question 5',
      incorrect: 'Incorrect feedback for question 5',
    },
    6: {
      correct: 'Correct feedback for question 6',
      incorrect: 'Incorrect feedback for question 6',
    },
    7: {
      correct: 'Correct feedback for question 7',
      incorrect: 'Incorrect feedback for question 7'
    }

  };

  const exercise_match_the_halves_feedback = {
    1: {
      correct: 'Correct feedback for dropdown question 1',
      incorrect: 'Incorrect feedback for question 1'
    },
    2: {
      correct: 'Correct feedback for dropdown question 2',
      incorrect: 'Incorrect feedback for question 2'
    },
    3: {
      correct: 'Correct feedback for dropdown question 3',
      incorrect: 'Incorrect feedback for question 3'
    }
  };


  // Call the function for the question container
  setupBinaryChoice('exercise-greeting-or-goodbye', exercise_greeting_or_goodbye_feedback);

  setupBinaryChoice('exercise-formal-informal', exercise_formal_or_informal_feedback);

  setupDropdownChoice('exercise-match-the-halves', exercise_match_the_halves_feedback);





}); // end of DOMContentLoaded
