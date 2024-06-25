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
let upload = document.getElementById("upload")
upload.onchange = function(){
    resetValue()
    download.style.display = 'block'
    reset.style.display = 'block'
    imgBox.style.display = 'block'
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])

    file.onload = function(){
        img.src = file.result
    }
    img.onload = function(){
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display = 'none'
    }
}
