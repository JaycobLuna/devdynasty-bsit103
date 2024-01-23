//Pwede na ma save yung mga images na pipiliin mo dito. Wag mo tanggalin to kasi goods na to.

const lowerProfileImages = document.querySelectorAll('.lower-profile .lower-container img');
const profileIcon = document.querySelector('.upper-profile .profile-icon img');

lowerProfileImages.forEach(image => {
  image.addEventListener('click', () => {
    setProfileIcon(image.src);
    localStorage.setItem('selectedProfileIcon', image.src);
  });
});

function setProfileIcon(src) {
  profileIcon.src = src;
}

window.addEventListener('load', () => {
  const selectedProfileIcon = localStorage.getItem('selectedProfileIcon');

  if (selectedProfileIcon) {
    setProfileIcon(selectedProfileIcon);
  }
});


//Eto sa pag edit sa username mo



// Get the input field and display element
const nicknameInput = document.getElementById('nicknameInput');
const nicknameDisplay = document.getElementById('nicknameDisplay');

// Add an event listener to the input field to update the display when the user types
nicknameInput.addEventListener('input', () => {
 // Get the new nickname value from the input field
 const newNickname = nicknameInput.value;

 // Update the display text using template literals to insert the nickname into the text
 nicknameDisplay.textContent = `Welcome to our website, ${newNickname}!`;
});