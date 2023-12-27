// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;
  
    toggleDarkModeButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      // Save the user preference for dark mode in local storage
      const isDarkMode = body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
    });
  
    // Check if the user prefers dark mode on page load
    const userPrefersDarkMode = localStorage.getItem('darkMode') === 'true';
    if (userPrefersDarkMode) {
      body.classList.add('dark-mode');
    }
  });
  