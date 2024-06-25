// Handle dark mode
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeIcon.addEventListener('click', () => {
    // const body = document.body;  // Store body element
    const isDarkMode = darkModeIcon.classList.toggle('dark');  // Toggle 'dark' class

    if (isDarkMode) {
        darkModeIcon.src = "images/moon-6689.svg";
        body.classList.add('dark');
    } else {
        darkModeIcon.src = "images/sun-1846.svg";
        body.classList.remove('dark');
    }

    // Toggle dark mode for all relevant elements
    document.querySelectorAll('.box, .settings').forEach(element => {
        element.classList.toggle('dark', isDarkMode);
    });
});

// handle upload picture
