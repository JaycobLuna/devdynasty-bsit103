function toggleDropdown(wrapper) {
    wrapper.classList.toggle('active');
}

/*function toggleDropdown(wrapper) {
    wrapper.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const quizWrappers = document.querySelectorAll('.quiz-wrapper');

    quizWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function (event) {
            event.stopPropagation();

            const isActive = wrapper.classList.contains('active');
            const dropdown = wrapper.querySelector('.dropdown');

            quizWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove('active');
                }
            });

            if (!isActive) {
                wrapper.classList.add('active');
            }
        });

        const dropdownItems = wrapper.querySelectorAll('.dropdown li');

        dropdownItems.forEach(item => {
            item.addEventListener('click', function (event) {
                event.stopPropagation();

                dropdownItems.forEach(innerItem => {
                    innerItem.classList.remove('active');
                });

                item.classList.add('active');

                // Check if the selected answer is correct
                const isCorrect = JSON.parse(item.dataset.correct || 'false');
                applyAnswerColor(wrapper, isCorrect);
            });
        });
    });

    document.addEventListener('click', function () {
        quizWrappers.forEach(wrapper => {
            wrapper.classList.remove('active');
        });
    });
});

function applyAnswerColor(wrapper, isCorrect) {
    if (isCorrect) {
        wrapper.style.backgroundColor = '#7FFF7F'; // Green for correct answer
    } else {
        wrapper.style.backgroundColor = '#FF7F7F'; // Red for incorrect answer
    }
} */

document.addEventListener('DOMContentLoaded', function () {
    const quizWrappers = document.querySelectorAll('.quiz-wrapper');

    quizWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function (event) {
            event.stopPropagation();

            const isActive = wrapper.classList.contains('active');
            const dropdown = wrapper.querySelector('.dropdown');

            quizWrappers.forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove('active');
                }
            });

            if (!isActive) {
                wrapper.classList.add('active');
            }
        });

        const dropdownItems = wrapper.querySelectorAll('.dropdown li');

        dropdownItems.forEach(item => {
            item.addEventListener('click', function (event) {
                event.stopPropagation();

                if (!wrapper.classList.contains('answered')) {
                    dropdownItems.forEach(innerItem => {
                        innerItem.classList.remove('active');
                    });

                    item.classList.add('active');

                    // Check if the selected answer is correct
                    const isCorrect = JSON.parse(item.dataset.correct || 'false');
                    applyAnswerColor(wrapper, isCorrect);

                    // Mark the wrapper as answered
                    wrapper.classList.add('answered');
                }
            });
        });
    });

    document.addEventListener('click', function () {
        quizWrappers.forEach(wrapper => {
            wrapper.classList.remove('active');
        });
    });
});

function applyAnswerColor(wrapper, isCorrect) {
    if (isCorrect) {
        wrapper.style.backgroundColor = '#7FFF7F'; // Green for correct answer
    } else {
        wrapper.style.backgroundColor = '#FF7F7F'; // Red for incorrect answer
    }
}

/* */

/* Eto yung quiz game total score nung nag quiz */
function calculateScore() {
    const quizWrappers = document.querySelectorAll('.quiz-wrapper');
    let correctAnswers = 0;
  
    quizWrappers.forEach((quizWrapper) => {
      const selectedOption = quizWrapper.querySelector('.dropdown li.selected');
      if (selectedOption && selectedOption.getAttribute('data-correct') === 'true') {
        correctAnswers++;
      }
    });
  
    // Display a notification with the score
    alert(`You got ${correctAnswers} out of ${quizWrappers.length} questions correct!`);
  }
  
  function toggleDropdown(quizWrapper) {
    // Close all other dropdowns
    document.querySelectorAll('.quiz-wrapper').forEach((wrapper) => {
      if (wrapper !== quizWrapper) {
        wrapper.classList.remove('open');
      }
    });
  
    // Toggle the selected dropdown
    quizWrapper.classList.toggle('open');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to each quiz wrapper
    document.querySelectorAll('.quiz-wrapper').forEach((quizWrapper) => {
      quizWrapper.addEventListener('click', () => toggleDropdown(quizWrapper));
    });
  
    // Add click event listener to the "Continue" button
    const continueButton = document.querySelector('.quiz-btn');
    if (continueButton) {
      continueButton.addEventListener('click', calculateScore);
    }
  
    // Add click event listeners to each dropdown option
    document.querySelectorAll('.dropdown li').forEach((option) => {
      option.addEventListener('click', () => {
        // Remove the "selected" class from all other options in the same dropdown
        const dropdownOptions = option.parentElement.querySelectorAll('li');
        dropdownOptions.forEach((dropdownOption) => {
          dropdownOption.classList.remove('selected');
        });
  
        // Add the "selected" class to the clicked option
        option.classList.add('selected');
      });
    });
  });
  