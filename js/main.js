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
const inputPic = document.getElementById('upload')
const picPlace = document.getElementById('img')
inputPic.addEventListener('change', () => {
    const file = inputPic.files[0]
    const reader = new FileReader()
    reader.onload = () => {
        picPlace.src = reader.result
    }
    reader.readAsDataURL(file)
})


// handle manipulating
let saturate = document.getElementById("saturate")
let Contrast = document.getElementById("Contrast")
let Brightness = document.getElementById("Brightness")
let Sepia = document.getElementById("Sepia")
let Grayscale = document.getElementById("Grayscale")
let blur = document.getElementById("Blur")
let hueRotate= document.getElementById("hueRotate")










// handle reset 
let reset = document.querySelector('reset')

